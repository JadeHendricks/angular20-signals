import { inject, Injectable, linkedSignal, Resource, resource, ResourceRef, Signal, signal } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, httpResource } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  readonly apiBase = 'http://localhost:3000/api/books';
  readonly wsBase = 'ws://localhost:3000/ws';
  readonly http = inject(HttpClient);

  #keyword = signal<string>('the');

  // #searchResult: ResourceRef<Book[]> = resource({
  //   params: () => ({ keyword: this.#keyword() }),
  //   loader: (options) => this.#searchKeywordPromise(options.params.keyword, options.abortSignal),
  //   defaultValue: []
  // })

  #searchResult = httpResource<Book[]>(() => ({
    url: `${this.apiBase}/search`,
    params: { q: this.#keyword() }
  }), {
    defaultValue: [],
  });

  // the data we depend on (type[0]) i.e from source option
  // the writeable string (type[1])
  // this will keep the same book in state if a user has chosen one, else the first book will be selected
  #selectedBookId = linkedSignal<Book[], string>({
    source: () => this.searchResult.value(),
    computation: (src, prev) => {
      if (!prev) {
        return src.length > 0 ? src[0].id : '';
      }
      if (prev.value === '' && src.length > 0) {
        return src[0].id;      
      }
      return prev.value;
    }
  });

  #selectedBook = rxResource({
    params: () => ({ id: this.#selectedBookId() }),
    stream: (options) => options.params.id 
    ? this.http.get<Book>(`${this.apiBase}/${options.params.id}`)
    : of(null),
    defaultValue: null
  })


  // #searchKeywordPromise(value: string, abortSignal?: AbortSignal): Promise<Book[]> {
  //   return fetch(`${this.apiBase}/search?q=${value}`, {signal: abortSignal})
  //     .then(response => response.json())
  // }

  get keyword(): Signal<string> {
    return this.#keyword.asReadonly();
  }

  setKeyword(value: string): void {
    return this.#keyword.set(value);
  }

  get searchResult(): Resource<Book[]> {
    return this.#searchResult.asReadonly()
  }

  get selectedBookId() {
    return this.#selectedBookId.asReadonly();
  }

  setSelectedBookId(value: string) {
    return this.#selectedBookId.set(value);
  }

  get selectedBook() {
    return this.#selectedBook.asReadonly();
  }

  constructor() { }
}

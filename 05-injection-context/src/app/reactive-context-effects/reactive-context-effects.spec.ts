import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveContextEffects } from './reactive-context-effects';

describe('ReactiveContextEffects', () => {
  let component: ReactiveContextEffects;
  let fixture: ComponentFixture<ReactiveContextEffects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveContextEffects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveContextEffects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToObservableExampleComponent } from './to-observable-example.component';

describe('ToObservableExampleComponent', () => {
  let component: ToObservableExampleComponent;
  let fixture: ComponentFixture<ToObservableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToObservableExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToObservableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

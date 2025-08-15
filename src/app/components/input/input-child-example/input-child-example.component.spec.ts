import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildExampleComponent } from './input-child-example.component';

describe('InputChildExampleComponent', () => {
  let component: InputChildExampleComponent;
  let fixture: ComponentFixture<InputChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

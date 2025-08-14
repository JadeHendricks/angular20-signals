import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSignalExampleComponent } from './to-signal-example.component';

describe('ToSignalExampleComponent', () => {
  let component: ToSignalExampleComponent;
  let fixture: ComponentFixture<ToSignalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToSignalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToSignalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

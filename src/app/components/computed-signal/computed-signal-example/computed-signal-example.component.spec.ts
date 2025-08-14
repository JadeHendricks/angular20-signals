import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalExampleComponent } from './computed-signal-example.component';

describe('ComputedSignalExampleComponent', () => {
  let component: ComputedSignalExampleComponent;
  let fixture: ComponentFixture<ComputedSignalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

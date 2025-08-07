import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteroperabilityWithRxjsAndSignals } from './interoperability-with-rxjs-and-signals';

describe('InteroperabilityWithRxjsAndSignals', () => {
  let component: InteroperabilityWithRxjsAndSignals;
  let fixture: ComponentFixture<InteroperabilityWithRxjsAndSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteroperabilityWithRxjsAndSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteroperabilityWithRxjsAndSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

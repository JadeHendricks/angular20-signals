import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInputDataExampleComponent } from './routing-input-data-example.component';

describe('RoutingInputDataExampleComponent', () => {
  let component: RoutingInputDataExampleComponent;
  let fixture: ComponentFixture<RoutingInputDataExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingInputDataExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingInputDataExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

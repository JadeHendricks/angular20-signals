import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInputDataChildExampleComponent } from './routing-input-data-child-example.component';

describe('RoutingInputDataChildExampleComponent', () => {
  let component: RoutingInputDataChildExampleComponent;
  let fixture: ComponentFixture<RoutingInputDataChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingInputDataChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingInputDataChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

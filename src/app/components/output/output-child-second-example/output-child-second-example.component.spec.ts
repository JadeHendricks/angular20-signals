import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputChildSecondExampleComponent } from './output-child-second-example.component';

describe('OutputChildSecondExampleComponent', () => {
  let component: OutputChildSecondExampleComponent;
  let fixture: ComponentFixture<OutputChildSecondExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputChildSecondExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputChildSecondExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

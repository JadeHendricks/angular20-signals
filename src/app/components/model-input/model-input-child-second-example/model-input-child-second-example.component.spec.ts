import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInputChildSecondExampleComponent } from './model-input-child-second-example.component';

describe('ModelInputChildSecondExampleComponent', () => {
  let component: ModelInputChildSecondExampleComponent;
  let fixture: ComponentFixture<ModelInputChildSecondExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInputChildSecondExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInputChildSecondExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

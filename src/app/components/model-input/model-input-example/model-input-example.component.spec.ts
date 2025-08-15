import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInputExampleComponent } from './model-input-example.component';

describe('ModelInputExampleComponent', () => {
  let component: ModelInputExampleComponent;
  let fixture: ComponentFixture<ModelInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

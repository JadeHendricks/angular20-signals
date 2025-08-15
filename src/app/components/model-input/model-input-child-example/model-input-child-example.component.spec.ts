import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInputChildExampleComponent } from './model-input-child-example.component';

describe('ModelInputChildExampleComponent', () => {
  let component: ModelInputChildExampleComponent;
  let fixture: ComponentFixture<ModelInputChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInputChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInputChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

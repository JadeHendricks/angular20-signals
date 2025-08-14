import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectExampleComponent } from './effect-example.component';

describe('EffectExampleComponent', () => {
  let component: EffectExampleComponent;
  let fixture: ComponentFixture<EffectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

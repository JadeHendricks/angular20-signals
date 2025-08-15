import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputChildExampleComponent } from './output-child-example.component';

describe('OutputChildExampleComponent', () => {
  let component: OutputChildExampleComponent;
  let fixture: ComponentFixture<OutputChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputChildExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

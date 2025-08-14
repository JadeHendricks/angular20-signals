import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteableSignalExampleComponent } from './writeable-signal-example.component';

describe('WriteableSignalExampleComponent', () => {
  let component: WriteableSignalExampleComponent;
  let fixture: ComponentFixture<WriteableSignalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteableSignalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteableSignalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

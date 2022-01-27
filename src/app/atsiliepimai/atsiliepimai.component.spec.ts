import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsiliepimaiComponent } from './atsiliepimai.component';

describe('AtsiliepimaiComponent', () => {
  let component: AtsiliepimaiComponent;
  let fixture: ComponentFixture<AtsiliepimaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtsiliepimaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsiliepimaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtsiliepimasComponent } from './add-atsiliepimas.component';

describe('AddAtsiliepimasComponent', () => {
  let component: AddAtsiliepimasComponent;
  let fixture: ComponentFixture<AddAtsiliepimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAtsiliepimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAtsiliepimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

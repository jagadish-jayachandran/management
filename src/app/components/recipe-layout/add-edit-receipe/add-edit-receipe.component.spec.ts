import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReceipeComponent } from './add-edit-receipe.component';

describe('AddEditReceipeComponent', () => {
  let component: AddEditReceipeComponent;
  let fixture: ComponentFixture<AddEditReceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditReceipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

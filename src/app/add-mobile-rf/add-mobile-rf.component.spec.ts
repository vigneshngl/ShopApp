import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileRFComponent } from './add-mobile-rf.component';

describe('AddMobileRFComponent', () => {
  let component: AddMobileRFComponent;
  let fixture: ComponentFixture<AddMobileRFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobileRFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobileRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

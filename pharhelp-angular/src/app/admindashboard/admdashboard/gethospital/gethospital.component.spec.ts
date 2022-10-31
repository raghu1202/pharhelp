import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethospitalComponent } from './gethospital.component';

describe('GethospitalComponent', () => {
  let component: GethospitalComponent;
  let fixture: ComponentFixture<GethospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GethospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

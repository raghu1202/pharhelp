import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmheaderComponent } from './admheader.component';

describe('AdmheaderComponent', () => {
  let component: AdmheaderComponent;
  let fixture: ComponentFixture<AdmheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

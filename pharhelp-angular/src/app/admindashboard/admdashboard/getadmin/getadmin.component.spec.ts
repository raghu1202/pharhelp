import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadminComponent } from './getadmin.component';

describe('GetadminComponent', () => {
  let component: GetadminComponent;
  let fixture: ComponentFixture<GetadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

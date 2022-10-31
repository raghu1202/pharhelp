import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaseboardComponent } from './daseboard.component';

describe('DaseboardComponent', () => {
  let component: DaseboardComponent;
  let fixture: ComponentFixture<DaseboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaseboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaseboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

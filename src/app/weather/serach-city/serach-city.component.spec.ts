import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachCityComponent } from './serach-city.component';

describe('SerachCityComponent', () => {
  let component: SerachCityComponent;
  let fixture: ComponentFixture<SerachCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

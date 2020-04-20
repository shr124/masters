import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeDetailComponent } from './recepie-detail.component';

describe('recipeDetailComponent', () => {
  let component: recipeDetailComponent;
  let fixture: ComponentFixture<recipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recipeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

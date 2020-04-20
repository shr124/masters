import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeItemComponent } from './recepie-item.component';

describe('recipeItemComponent', () => {
  let component: recipeItemComponent;
  let fixture: ComponentFixture<recipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recipeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

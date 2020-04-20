import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recipesComponent } from './recepies.component';

describe('recipesComponent', () => {
  let component: recipesComponent;
  let fixture: ComponentFixture<recipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

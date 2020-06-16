import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDirectivesComponent } from './ng-directives.component';

describe('NgDirectivesComponent', () => {
  let component: NgDirectivesComponent;
  let fixture: ComponentFixture<NgDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

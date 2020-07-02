import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGroupContainer } from './project-group.container';

describe('ProjectGroupComponent', () => {
  let component: ProjectGroupContainer;
  let fixture: ComponentFixture<ProjectGroupContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGroupContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGroupContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

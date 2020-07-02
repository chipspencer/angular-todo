import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContainer } from './content.container';

describe('Content.ContainerComponent', () => {
  let component: ContentContainer;
  let fixture: ComponentFixture<ContentContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

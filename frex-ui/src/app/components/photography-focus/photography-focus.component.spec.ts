import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyFocusComponent } from './photography-focus.component';

describe('PhotographyFocusComponent', () => {
  let component: PhotographyFocusComponent;
  let fixture: ComponentFixture<PhotographyFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

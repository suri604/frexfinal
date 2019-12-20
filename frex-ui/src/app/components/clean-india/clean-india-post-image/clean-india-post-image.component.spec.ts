import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanIndiaPostImageComponent } from './clean-india-post-image.component';

describe('CleanIndiaPostImageComponent', () => {
  let component: CleanIndiaPostImageComponent;
  let fixture: ComponentFixture<CleanIndiaPostImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanIndiaPostImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanIndiaPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

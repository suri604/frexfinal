import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImageDetailsComponent } from './post-image-details.component';

describe('PostImageDetailsComponent', () => {
  let component: PostImageDetailsComponent;
  let fixture: ComponentFixture<PostImageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostImageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

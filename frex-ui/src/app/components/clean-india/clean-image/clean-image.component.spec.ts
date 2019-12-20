import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanImageComponent } from './clean-image.component';

describe('CleanImageComponent', () => {
  let component: CleanImageComponent;
  let fixture: ComponentFixture<CleanImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

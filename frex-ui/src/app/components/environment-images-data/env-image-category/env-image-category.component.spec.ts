import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvImageCategoryComponent } from './env-image-category.component';

describe('EnvImageCategoryComponent', () => {
  let component: EnvImageCategoryComponent;
  let fixture: ComponentFixture<EnvImageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvImageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvImageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

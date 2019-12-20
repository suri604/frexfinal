import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentImagesDataComponent } from './environment-images-data.component';

describe('EnvironmentImagesDataComponent', () => {
  let component: EnvironmentImagesDataComponent;
  let fixture: ComponentFixture<EnvironmentImagesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentImagesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentImagesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

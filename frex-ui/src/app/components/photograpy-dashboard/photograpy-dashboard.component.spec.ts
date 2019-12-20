import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotograpyDashboardComponent } from './photograpy-dashboard.component';

describe('PhotograpyDashboardComponent', () => {
  let component: PhotograpyDashboardComponent;
  let fixture: ComponentFixture<PhotograpyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotograpyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotograpyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

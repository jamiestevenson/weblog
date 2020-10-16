import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRendererComponent } from './post-renderer.component';

describe('PostRendererComponent', () => {
  let component: PostRendererComponent;
  let fixture: ComponentFixture<PostRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

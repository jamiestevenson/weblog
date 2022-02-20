import 'jasmine';
import 'zone.js/dist/zone-testing';
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
    component.post = {
      id: 'id-content',
      date: 'date content',
      title: 'title content',
      body: 'body content',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

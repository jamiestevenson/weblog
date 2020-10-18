import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../interfaces/blogPost';

@Component({
  selector: 'app-post-renderer',
  templateUrl: './post-renderer.component.html',
  styleUrls: ['./post-renderer.component.css']
})
export class PostRendererComponent implements OnInit {

  @Input() post: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}

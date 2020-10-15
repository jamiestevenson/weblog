import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../interfaces/blogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(p => this.posts = p.slice(1, 5));
  }
}

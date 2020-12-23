import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../interfaces';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css', '../../../app.component.css' ]
})
export class HomeComponent implements OnInit {
  posts: BlogPost[] = [];
  lastPost: BlogPost;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
    this.getLatestPost();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(p => this.posts = p.slice(1, 4));
  }

  getLatestPost(): void {
    this.postService.getLatestPost()
      .subscribe(p => this.lastPost = p);
  }
}

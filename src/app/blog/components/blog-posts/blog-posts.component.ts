import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../interfaces';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css', '../../../app.component.css']
})
export class BlogPostsComponent implements OnInit {

  posts: BlogPost[];
  selectedPost: BlogPost;

  getPosts(): void {
    this.postService.getPosts()
        .subscribe(p => this.posts = p);
  }

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

}

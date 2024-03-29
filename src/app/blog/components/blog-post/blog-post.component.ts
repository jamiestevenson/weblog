import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPost } from '../../interfaces/';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css', '../../../app.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input() post: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
  }
  
  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('trying to get post: ' + id);
    this.postService.getPost(id)
      .subscribe(p => this.post = p);
  }
}

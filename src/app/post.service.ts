import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPost } from './interfaces/blogPost';
import { POSTS } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<BlogPost[]> {
    return of(POSTS);
  }

  getPost(id: string): Observable<BlogPost> {
    return of(POSTS.find(post => post.id === id));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BlogPost } from '../interfaces/';
const NAME_DELIMITER = '_';
const TITLE_SPACER = '-';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private POSTS: BlogPost[] = [];

  constructor(private httpService: HttpClient) {
    this.POSTS = this.inflatePosts();
  }

  getPosts(): Observable<BlogPost[]> {
    return of(this.POSTS);
  }

  getPost(id: string): Observable<BlogPost> {
    return of(this.POSTS.find((post) => post.id === id));
  }

  getLatestPost(): Observable<BlogPost> {
    return of(this.POSTS[this.POSTS.length - 1]);
  }

  private inflatePosts(): BlogPost[] {
    const rawPosts: string[] = this.getPostFiles();
    console.log(`Got post files: ${JSON.stringify(rawPosts)}`);
    const posts: BlogPost[] = rawPosts.map((p) => this.inflatePost(p));
    return posts;
  }

  private getPostFiles(): string[] {
    const dirFiles: string[] = [];
    console.log(`getting post files`);
    this.httpService.get('/assets/posts', { responseType: 'text' })
    .subscribe(
      (result) => {
        console.log(`result: ${JSON.stringify(result)}`);
        dirFiles.push(JSON.stringify(result));
      },
      (err) => {
        console.log(`error: ${JSON.stringify(err)}`);
        // if(err.status === 200) {
        //   dirFiles.push(err.body);
        // }
      }
    );
    return dirFiles;
  }

  private inflatePost(filePath: string): BlogPost | undefined {
    const nameParts = filePath.split(NAME_DELIMITER);

    const post: BlogPost = {
      id: '',
      body: '',
      date: nameParts[0],
      title: this.formatTitle(nameParts[1]),
    };

    fetch(filePath)
      .then((file) => {
        file
          .text()
          .then((markdown) => {
            post.body = markdown;
          })
          .catch((err) => {
            console.log('inflatePost: no file body');
            return undefined;
          });
      })
      .catch((err) => {
        console.log('inflatePost: no file');
        return undefined;
      });

    return post;
  }

  private formatTitle(rawTitle: string): string {
    const words: string[] = rawTitle.split(TITLE_SPACER);
    words.map((w) => {
        if (w.charAt(0) === w.charAt(0).toLowerCase()) {
            return w.toUpperCase();
        }
        return w;
    });
    return words.join(' ');
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BlogPost } from '../interfaces/';
import { map, tap } from 'rxjs/internal/operators';
import { environment } from '../../../environments/environment';
import { PathLocationStrategy } from '@angular/common';
const NAME_DELIMITER = '_';
const TITLE_SPACER = '-';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private POSTS: Observable<BlogPost[]> = of([]);

  constructor(private httpService: HttpClient) {
    this.POSTS = this.initialisePosts();
  }

  getPosts(): Observable<BlogPost[]> {
    return this.POSTS;
  }

  getPost(id: string): Observable<BlogPost | undefined> {
    return this.POSTS.pipe(
      map( posts => {
        const filtered = posts.filter(item => item.id === id);
        return filtered[0];
      })
    );
  }

  getLatestPost(): Observable<BlogPost> {
    return this.POSTS.pipe(
      map( posts => {
        if (posts.length > 0) {
          return posts[posts.length - 1];
        }
      })
    );
  }

  private initialisePosts(): Observable<BlogPost[]> {
    const index: Observable<string[]> = this.getPostIndex();
    const posts: Observable<BlogPost[]> = index.pipe(
      map(i => this.fetchPosts(i)),
    );
    return posts;
  }

  private getPostIndex(): Observable<string[]> {
    return this.httpService.get('/weblog/assets/posts/index.txt', { responseType: 'text' })
    .pipe(
      map(result => result.split(`\r\n`)),
      map(paths => {
        if (environment.production) {
          return paths.map(path => `$weblog/${path}`)
        }
        return paths;
      })
    );
  }

  private fetchPosts(index: string[] ): BlogPost[] {
    return index.map(
        item => this.inflatePost(item)
    );
  }

  private inflatePost(filePath: string): BlogPost | undefined {
    const nameParts = filePath.split(NAME_DELIMITER);
    const titleWithDelimiters = nameParts[1].replace('.md', '');

    const post: BlogPost = {
      id: '',
      body: '',
      date: this.formatDate(nameParts[0]),
      title: this.formatTitle(titleWithDelimiters),
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
    post.id = `${post.date}${TITLE_SPACER}${titleWithDelimiters}`

    return post;
  }

  private formatTitle(rawTitle: string): string {
    let words: string[] = rawTitle.split(TITLE_SPACER);
    words = words.map((w) => {
        if (w.charAt(0) === w.charAt(0).toLowerCase()) {
            return this.capitaliseFirstLetter(w);
        }
        return w;
    });
    return words.join(' ');
  }

  private capitaliseFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  private formatDate(rawDate: string): string {
    const fragments: string[] = rawDate.split('/');
    return fragments[fragments.length - 1];
  }
}



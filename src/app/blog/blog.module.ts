import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent } from './components';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule
  ],
  providers: []
})
export class BlogModule { }

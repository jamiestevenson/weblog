import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent } from './components';



@NgModule({
  declarations: [BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }

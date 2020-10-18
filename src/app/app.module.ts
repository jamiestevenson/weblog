import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { HomeComponent } from './home/home.component';
import { PostRendererComponent } from './post-renderer/post-renderer.component';
import { LogicaPageComponent } from './logica-page/logica-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostsComponent,
    HomeComponent,
    PostRendererComponent,
    LogicaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

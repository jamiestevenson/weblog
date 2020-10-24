import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { HomeComponent } from './home/home.component';
import { PostRendererComponent } from './post-renderer/post-renderer.component';
import { LogicaModule } from './logica/logica.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostsComponent,
    HomeComponent,
    PostRendererComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    MarkdownModule.forRoot(),
    // Local
    AppRoutingModule,
    LogicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

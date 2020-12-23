import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicaModule } from './logica/logica.module';
import { BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent } from './blog/components';

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

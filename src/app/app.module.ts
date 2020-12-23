import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicaModule } from './logica/logica.module';
import { BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent } from './blog/components';
import { CoreModule } from './core/core.module';

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
    // Store
    CoreModule.forRoot(),
    // Instrumentation (must be after store module declaration)
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    // Local
    AppRoutingModule,
    LogicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

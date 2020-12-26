import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule,  } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicaModule } from './logica/logica.module';
import { BlogPostComponent, BlogPostsComponent, HomeComponent, PostRendererComponent } from './blog/components';
import { EffectsModule } from '@ngrx/effects';
import { StyleService } from './core/services/style.service';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    // Instrumentation (must be after store module declaration)
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    // Local
    AppRoutingModule,
    LogicaModule
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

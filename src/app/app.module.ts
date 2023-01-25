import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule,  } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogicaModule } from './logica/logica.module';
import { EffectsModule } from '@ngrx/effects';
import { StyleService } from './core/services/style.service';
import { BlogModule } from './blog/blog.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WhrpModule } from './whrp/whrp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    RouterModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    // Store
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    // Instrumentation (must be after store module declaration)
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    // Local
    AppRoutingModule,
    BlogModule,
    LogicaModule,
    WhrpModule,
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

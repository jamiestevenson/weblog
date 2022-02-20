import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { WhrpPageComponent } from './containers/whrp-page/whrp-page.component';
import { WhrpIndexComponent } from './components/whrp-index/whrp-index.component';



@NgModule({
  declarations: [WhrpPageComponent, WhrpIndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    HttpClientModule
  ],
  providers: []
})
export class WhrpModule { }

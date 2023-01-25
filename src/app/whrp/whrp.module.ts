import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { WhrpPageComponent } from './containers/whrp-page/whrp-page.component';
import { WhrpIndexComponent } from './components/whrp-index/whrp-index.component';
import { WhrpRelationshipsComponent } from './components/whrp-relationships/whrp-relationships.component';
import { WhrpService } from './services/whrp.service';



@NgModule({
  declarations: [
    WhrpPageComponent,
    WhrpIndexComponent,
    WhrpRelationshipsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    HttpClientModule
  ],
  providers: [WhrpService]
})
export class WhrpModule { }

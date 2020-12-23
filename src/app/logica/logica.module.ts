import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicaPageComponent } from './containers/logica-page/logica-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ControlsComponent } from './components/controls/controls.component';



@NgModule({
  declarations: [
    LogicaPageComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LogicaPageComponent
  ]
})
export class LogicaModule { }

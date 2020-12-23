import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LogicaPageComponent } from './containers/logica-page/logica-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ControlsComponent } from './components/controls/controls.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    LogicaPageComponent,
    ControlsComponent
  ],
  imports: [
    StoreModule.forFeature(logicaFeatureKey, reducers),
    EffectsModule.forFeature(effects)
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LogicaPageComponent
  ]
})
export class LogicaModule { }

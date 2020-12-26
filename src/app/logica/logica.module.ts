import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LogicaPageComponent } from './containers/logica-page/logica-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ControlsComponent } from './components/controls/controls.component';
import { StoreModule } from '@ngrx/store';
import { logicaFeatureKey, reducers } from './store/reducers';
import { effects } from './store/effects';
import { GameComponent } from './components/game/game.component';
import { LogicaFacade } from './store/facade/facade';



@NgModule({
  declarations: [
    LogicaPageComponent,
    ControlsComponent,
    GameComponent
  ],
  imports: [
    StoreModule.forFeature(logicaFeatureKey, reducers),
    EffectsModule.forFeature(effects),
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LogicaPageComponent
  ],
  providers: [LogicaFacade]
})
export class LogicaModule { }

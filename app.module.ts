import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteembarcadosComponent } from './componenteembarcados/componenteembarcados.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteembarcadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

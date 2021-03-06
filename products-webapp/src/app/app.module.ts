import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const el = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('products-webapp', el);
  }

}

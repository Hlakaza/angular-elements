import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [AppComponent],
  // entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    if (!customElements.get('caculator-app')) {
        customElements.define('caculator-app', element);
    }
  }
  ngDoBootstrap(): void {}

}

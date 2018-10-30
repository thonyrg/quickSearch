import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuickSearchModule } from './quick-search/quick-search.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuickSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PengwynComingSoonComponent } from './components/pengwyn-coming-soon/pengwyn-coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    PengwynComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

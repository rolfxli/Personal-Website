import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainTextComponent } from './home/main-text/main-text.component';
import { ConnectionsComponent } from './connections/connections.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainTextComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

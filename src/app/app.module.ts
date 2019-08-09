import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainTextComponent } from './home/main-text/main-text.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ButtonComponent } from './button/button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainTextComponent,
    ConnectionsComponent,
    ButtonComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    PortfolioComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

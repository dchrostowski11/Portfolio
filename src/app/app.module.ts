import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { InfoComponent } from './info/info.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { ScrollbarDirective } from './directives/scrollbar.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent,
    ScrollbarDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

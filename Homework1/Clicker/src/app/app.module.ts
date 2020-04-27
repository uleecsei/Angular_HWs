import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { GameModule } from './game/game.module';
import { ScoresModule } from './scores/scores.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GameModule,
    ScoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

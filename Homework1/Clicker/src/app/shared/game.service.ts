import { Injectable } from '@angular/core';
import { LoadService } from './load.service';
import { Router } from '@angular/router';

export interface Score {
  name: string;
  score: number;
}
export interface Status {
  gameStarted: boolean;
  gameFinished: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  TIMER_SECONDS = 10;
  seconds = this.TIMER_SECONDS;
  score = 0;
  message = 'That\'s nice!';
  scoresArray: Score[] = [];

  constructor(private load: LoadService, private router: Router){}

  onClick(status: Status) {
    if (status.gameFinished) {
      return ;
    }
    if (!status.gameStarted) {
      const interval = setInterval(() => {
        this.seconds = this.seconds - 1;
        if (this.seconds < 1) {
          this.generateMessage();
          this.scoreBoard();
          status.gameFinished = true;
          status.gameStarted = false;
          clearInterval(interval);
          this.toRoute('/scores');
        }
      }, 1000);
    }
    this.score++;
    status.gameStarted = true;
  }
  
  reset() {
    // status.gameFinished = false;
    this.score = 0;
    this.seconds = this.TIMER_SECONDS;
  }
  generateMessage() {
    switch (true) {
      case this.score < 5:
        this.message = 'Well, you\'re not good enough...';
        break;
      case this.score >= 5 && this.score < 20:
        this.message = 'At least you were trying';
        break;
      case this.score >= 20 && this.score <= 60:
        this.message = 'Not bad!';
        break;
      case this.score >= 60 && this.score <= 100:
        this.message = 'You\'re good!';
        break;
      case this.score >= 100:
        this.message = 'You\'re God!';
        break;
    }
  }
  scoreBoard() {
    this.scoresArray = JSON.parse(localStorage.getItem('Scores')) || [];
    this.scoresArray.push({ name: this.load.getName(), score: this.score });
    this.scoresArray.sort((a, b) => b.score - a.score);
    localStorage.setItem('Scores', JSON.stringify(this.scoresArray));
  }
  getScoresArray() {
    return this.scoresArray;
  }
  getScore() {
    return this.score;
  }
  getMessage() {
    return this.message;
  }
  getSeconds() {
    return this.seconds;
  }
  toRoute(route: string) {
    this.router.navigate([route]);
  }
}

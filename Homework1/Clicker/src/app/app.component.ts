import { Component } from '@angular/core';

interface Score {
  name: string;
  score: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clicker';
  name: string = prompt('Hello, please, enter your name!') || 'Player';
  src = '../assets/button1.png';
  TIMER_SECONDS = 10;
  seconds = this.TIMER_SECONDS;
  gameStarted = false;
  score = 0;
  gameFinished = false;
  message = 'That\'s nice!';
  scoresArray: Score[] = [];

  onClick() {
    if (this.gameFinished) {
      return;
    }
    if (!this.gameStarted) {
      const interval = setInterval(() => {
        this.seconds = this.seconds - 1;
        if (this.seconds < 1) {
          this.generateMessage();
          this.scoreBoard(this.name, this.score);
          this.gameFinished = true;
          this.gameStarted = false;
          clearInterval(interval);
        }
      }, 1000);
    }
    this.score++;
    this.gameStarted = true;
  }

  onMouseDown() {
    this.src = '../assets/button2.png';
  }
  onMouseUp() {
    this.src = '../assets/button1.png';
  }
  retry() {
    this.gameFinished = false;
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
  scoreBoard(name: string, score: number) {
    this.scoresArray = JSON.parse(localStorage.getItem('Scores')) || [];
    this.scoresArray.push({ name, score });
    this.scoresArray.sort((a, b) => b.score - a.score);
    localStorage.setItem('Scores', JSON.stringify(this.scoresArray));
  }
}

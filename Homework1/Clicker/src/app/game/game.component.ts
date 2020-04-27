import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';
import { LoadService } from '../shared/load.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private game: GameService,
    private load: LoadService,
  ) {}
  status = {
    gameStarted: false,
    gameFinished: false
  };
  src = '../assets/button1.png';

  ngOnInit(): void {}
  onMouseDown() {
    this.src = '../assets/button2.png';
  }
  onMouseUp() {
    this.src = '../assets/button1.png';
  }
  clickButton() {
    this.game.onClick(this.status);
  }
  getScore() {
    return this.game.getScore();
  }
  getMessage() {
    return this.game.getMessage();
  }
  getName() {
    return this.load.getName();
  }
  getSeconds() {
    return this.game.getSeconds();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { GameService, Score } from '../shared/game.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  scoresArray: Score[]

  constructor(private game: GameService) { }

  ngOnInit(): void {
    this.scoresArray = this.game.getScoresArray();
  }
  retry() {
    this.game.reset();
    this.game.toRoute('/game');
  }
  getMessage() {
    return this.game.getMessage();
  }
  getScore() {
    return this.game.getScore();
  }
  
}

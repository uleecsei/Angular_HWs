import { Component, OnInit } from '@angular/core';
import { LoadService } from '../shared/load.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private load: LoadService, private router: Router) {}

  ngOnInit(): void {
    this.load.showPopUp();
    this.router.navigate(['/game']);
  }
}

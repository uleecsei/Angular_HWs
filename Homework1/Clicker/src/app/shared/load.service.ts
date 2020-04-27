import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  name: string
  constructor() { 
  }
  showPopUp() {
    this.name = prompt('Hello, please, enter your name!') || 'Player';
  }
  getName() {
    return this.name;
  }
}

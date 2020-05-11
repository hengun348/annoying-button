import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'annoying-button',
  templateUrl: './annoying-button.component.html',
  animations: [
    trigger('avoidMouse', [
      state('normal', style({
        transform: 'translate(0,0)'
      })),
      state('annoying1', style({
        transform: 'translate(100%,0)'
      })),
      state('annoying2', style({
        transform: 'translate(-100%,0)'
      })),
      state('annoying3', style({
        transform: 'translate(0,100%)'
      })),
      state('annoying4', style({
        transform: 'translate(0,-100%)'
      })),
      state('annoying5', style({
        transform: 'translate(50%, 50%)'
      })),
      state('annoying6', style({
        transform: 'translate(-50%, 50%)'
      })),
      state('annoying7', style({
        transform: 'translate(50%, -50%)'
      })),
      state('annoying8', style({
        transform: 'translate(-50%, -50%)'
      })),
      transition('* => *', [
        animate('0.02s')
      ])
    ])
    ]
})
export class AnnoyingButtonComponent {
  state: string;

  constructor() {
    this.state = 'normal';
  }

  onMouseOver() {
    this.state = this.getRandomAnnoyingState(1, 8);
  }

  getState(): string {
    return this.state;
  }

  private getRandomAnnoyingState(min, max): string {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    return 'annoying' + randomNumber;
  }
}

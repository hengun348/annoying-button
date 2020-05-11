import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent
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
        transform: 'translate(75%, 75%)'
      })),
      state('annoying6', style({
        transform: 'translate(-75%, 75%)'
      })),
      state('annoying7', style({
        transform: 'translate(75%, -75%)'
      })),
      state('annoying8', style({
        transform: 'translate(-75%, -75%)'
      })),
      transition('* => *', [
        animate('0.05s')
      ])
    ])
  ]
})
export class AnnoyingButtonComponent {
  state: string;
  animating: boolean;

  constructor() {
    this.state = 'normal';
    this.animating = false;
  }

  onMouseOver() {
    if (!this.animating) {
      if (this.state === 'normal') {
        this.state  = this.getRandomAnnoyingState(1, 8);
      } else {
        this.state = 'normal';
      }
    }
  }

  getState(): string {
    return this.state;
  }

  onAnimationEvent(event: AnimationEvent): void {
    if (event.phaseName === 'start') {
      this.animating = true;
    } else if (event.phaseName === 'done') {
      this.animating = false;
    }
  }

  private getRandomAnnoyingState(min, max): string {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    return 'annoying' + randomNumber;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{counter}}</h3>
    <button (click)="increaseBy(5)">+5</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(5)">-5</button>
  `
})
export class CounterComponent{
  public counter:number = 10;
  increaseBy(n:number):void{this.counter+=n}
  reset(){this.counter=10}
  decreaseBy(n:number):void{this.counter-=n}
}

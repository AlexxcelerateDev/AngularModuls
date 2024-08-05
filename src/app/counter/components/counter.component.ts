import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increaseByOne(1)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="increaseByOne(-1)">-1</button>`,
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 10;

  increaseByOne(value: number): void {
    this.counter += value;
  }

  resetValue(): void {
    this.counter = 10;
  }
}

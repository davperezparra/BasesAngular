import { Component, } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`

<h3>Counter : {{counter}}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset()">Reset</button>

  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(numero:number):void {
    this.counter +=1 * numero;
     }

     reset():void {
   this.counter=10;
     }


}

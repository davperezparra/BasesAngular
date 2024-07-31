import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'mi primera app';
  public counter : number = 10;

  increaseBy(numero:number):void {
 this.counter +=1 * numero;
  }

  reset():void {
this.counter=10;
  }


}

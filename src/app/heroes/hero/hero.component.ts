import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre:string ='rodolfo';
  public edad:number = 23;


  get capitalizedName():string {
    return this.nombre.toUpperCase();
  }

  getheroDescription():string {
return `${this.nombre} - ${this.edad} `;
  }


  changeHero():void {

     this.nombre ='Superman';
  }

  changeAge():void{

    this.edad =34;

  }


}

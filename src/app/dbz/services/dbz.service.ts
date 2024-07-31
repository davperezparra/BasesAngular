import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
 import { v4 as uuid  } from "uuid";


@Injectable(
  {providedIn: 'root'}

  )
export class DbzService {

  public characters:Character[] = [{
    id:uuid(),
    name:'Krilin',
    puntos:1000
  },{
    id:uuid(),
    name:"Goku",
    puntos:9000
  }];

  onNewCharacter(character:Character):void {


    const newCharacter :Character = {
      id:uuid(),
      ...character

    }
    console.log('Main Page')
    console.log(character);
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  // onDeleteCharacter(index:number):void {

  //   this.characters.splice(index,1);
  //   console.log(index);


  // }

  deleteCharacterbyId(id:string){

    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}

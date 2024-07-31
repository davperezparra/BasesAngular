import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public deleteIndex :EventEmitter <string> = new EventEmitter();

  @Input()
  public characterList:Character []=[{
    id:'0',
    name:"trunks",
    puntos:1000

  }]

  // OnDelete(index:number):void {
  //   console.log(index);
  //   this.deleteIndex.emit(index);
  // }

  onDeleteCharacter(id?:string):void {
// TODO: Emitir el ID DEL PERSONAJE
if (!id) return;
this.deleteIndex.emit(id);

console.log(id);
  }

}

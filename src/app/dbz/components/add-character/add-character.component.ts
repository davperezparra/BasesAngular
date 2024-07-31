import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter <Character> = new EventEmitter();
  public characte:Character = {
    name:'',
    puntos:0

  }

  obtenerInformacion( ):void {
      console.log(this.characte);
      if(this.characte.name.length ===0) return;

      this.onNewCharacter.emit(this.characte);

      this.characte.name='';
      this.characte.puntos=0;


  }

}

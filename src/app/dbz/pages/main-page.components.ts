import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page-component',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor(public dbzService:DbzService){

}

}

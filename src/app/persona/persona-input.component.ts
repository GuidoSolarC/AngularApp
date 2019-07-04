import { PersonaService } from './persona.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona-input',
  templateUrl: 'persona-input-component.html'
})

export class PersonaInputComponent {

  nombreIngresado = '';

  constructor(private pService: PersonaService) {

  }

  onCreatePersona() {
    console.log(this.nombreIngresado);
    this.pService.addPersona(this.nombreIngresado);
    this.nombreIngresado = '';
  }
}

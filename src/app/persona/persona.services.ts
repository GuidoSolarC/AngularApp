import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class PersonaService {

  personasRefresh = new Subject<string[]>();
  persona = ['Max', 'José', 'Macarena'];

  addPersona(name: string) {
    this.persona.push(name);
    this.personasRefresh.next(this.persona);
    console.log(this.persona);
  }

  removePersona(name: string) {
    this.persona = this.persona.filter(person => {
      return person !== name;
    });
    this.personasRefresh.next(this.persona);
    console.log(this.persona);
  }
}

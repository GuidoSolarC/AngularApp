import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class PersonaService {

  personasRefresh = new Subject<string[]>();
  persona: string[];

  constructor (private http: HttpClient) {}

  fetchPersona(){
    this.http
    .get<any>('https://swapi.co/api/people')
    .pipe(map(response => {
      return response.results.map(character => character.name);
    }))
    .subscribe(responseTransform => {
      this.personasRefresh.next(responseTransform);
    });
  }

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

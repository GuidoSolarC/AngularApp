import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonaService } from './persona.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})

export class PersonaComponent implements OnInit, OnDestroy {
    personaList: string[];
    cargando = false;
    private personaListSubs: Subscription;
    // private personaService: PersonaService;

    constructor(private pService: PersonaService) {
      // this.personaList = pService.persona;
      // this.personaService = pService;
    }

    ngOnInit() {
      this.personaListSubs = this.pService.personasRefresh.subscribe(persona => {
          this.personaList = persona;
          this.cargando = false;
      });
      this.cargando = true;
      this.pService.fetchPersona();
    }

    onRemovePerson(nombrePersona: string) {
      this.pService.removePersona(nombrePersona);
    }

    ngOnDestroy() {
      this.personaListSubs.unsubscribe();
    }
}

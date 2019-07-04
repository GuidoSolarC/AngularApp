import { PersonaInputComponent } from './persona/persona-input.component';
import { PersonaComponent } from './persona/persona.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonaComponent },
  { path: 'input', component: PersonaInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}

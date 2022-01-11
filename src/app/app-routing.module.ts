import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioHorasComponent } from './formulario-horas/formulario-horas.component';

import { TecnicosComponent } from './tecnicos/tecnicos.component';

const routes: Routes = [
  { path: 'tecnicos', component: TecnicosComponent },
  { path: 'formulario-horas', component: FormularioHorasComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

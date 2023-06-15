import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'add', component: AddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

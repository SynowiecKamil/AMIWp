import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'toDoList', component: ToDoListComponent},
  {path: 'mapa', component: MapaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableComponent, ToDoListComponent, MapaComponent];

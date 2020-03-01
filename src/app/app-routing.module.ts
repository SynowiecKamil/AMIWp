import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'toDoList', component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableComponent, ToDoListComponent];

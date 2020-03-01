import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass']
})
export class ToDoListComponent implements OnInit {

  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.tasksList.push(this.newTask);
    console.log(this.newTask);
    this.newTask = '';
  }
  remove(task: string) {
  this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass']
})
export class ToDoListComponent implements OnInit {

  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  add() {
    this.tasksList.push(this.newTask);
    console.log(this.newTask);
    this.newTask = '';
  }
  remove(task: string) {

    this.dialogService.openConfirmDialog()
  .afterClosed().subscribe(res => {
      if (res) {
        this.tasksList = this.tasksList.filter(e => e !== task);
      }
    });
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

}

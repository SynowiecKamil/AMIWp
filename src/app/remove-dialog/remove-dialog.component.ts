import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.sass']
})
export class RemoveDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dailogRef: MatDialogRef<RemoveDialogComponent>) {
  }

  ngOnInit(): void {
  }


  closeDialog(){
    this.dailogRef.close();
  }
}

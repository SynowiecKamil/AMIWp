import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from '../remove-dialog/remove-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(RemoveDialogComponent,{
      width: '390px',
      panelClass: '',
      disableClose: true,
    });
  }
}

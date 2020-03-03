import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatDialogModule,
  ],
  exports: [
    MatSliderModule,
    MatDialogModule

  ]
})
export class SharedModule { }

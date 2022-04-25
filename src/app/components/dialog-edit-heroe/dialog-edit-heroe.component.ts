import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface HeroeData {
  name: string;
  age: number;
  id:number;
}
@Component({
  selector: 'app-dialog-edit-heroe',
  templateUrl: './dialog-edit-heroe.component.html',
  styleUrls: ['./dialog-edit-heroe.component.scss']
})
export class DialogEditHeroeComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroeData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

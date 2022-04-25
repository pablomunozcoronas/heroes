import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-heroe',
  templateUrl: './dialog-delete-heroe.component.html',
  styleUrls: ['./dialog-delete-heroe.component.scss']
})
export class DialogDeleteHeroeComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public idHeroe: number,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

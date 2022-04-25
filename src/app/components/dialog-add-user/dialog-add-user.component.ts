import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface HeroeData {
  name: string;
  age: number;
  id:number;
}

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddHeroeComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAddHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroeData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

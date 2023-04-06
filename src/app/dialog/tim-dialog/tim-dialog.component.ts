import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LigaModel } from 'src/app/model/liga.model';
import {TimModel } from 'src/app/model/tim.model';
import { LigaService } from 'src/app/service/liga.service';
import { TimService } from 'src/app/service/tim.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit{

  public flag: number;

  lige: LigaModel[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<TimDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: TimModel,
              public timService: TimService,
              public ligaService: LigaService ) { }

  ngOnInit(): void {
    this.ligaService.getAllLiga().subscribe((lige: LigaModel[]) =>
    this.lige = lige);
  }

  public add(): void {
    this.timService.addTim(this.data);
    this.snackBar.open('Uspešno dodat tim ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.timService.updateTim(this.data);
    this.snackBar.open('Uspešno izmenjen tim ' + this.data.id, "U redu", {duration: 2000});
  }

  public delete(): void {
    this.timService.deleteTim(this.data.id);
    this.snackBar.open("Uspešno obrisan tim ' " + this.data.id, "U redu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'U redu', {duration:2000});
  }

  compareTo(a: any, b: any) {
    if (a === null || b === null) {
      return false;
    }
    return a.id === b.id;
  }

}

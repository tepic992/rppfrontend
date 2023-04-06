import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LigaModel } from 'src/app/model/liga.model';
import { LigaService } from 'src/app/service/liga.service';

@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit{

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LigaDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: LigaModel,
              public ligaService: LigaService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.ligaService.addLiga(this.data);
    this.snackBar.open('Uspešno dodata liga ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.ligaService.updateLiga(this.data);
    this.snackBar.open('Uspešno izmenjena liga ' + this.data.naziv, "U redu", {duration: 2000});
  }

  public delete(): void {
    this.ligaService.deleteLiga(this.data.id);
    this.snackBar.open("Uspešno obrisana liga ' " + this.data.id, "U redu", {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", 'U redu', {duration:2000});
  }
}

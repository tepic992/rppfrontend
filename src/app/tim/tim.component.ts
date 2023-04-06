import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TimDialogComponent } from '../dialog/tim-dialog/tim-dialog.component';
import { TimModel } from '../model/tim.model';
import { TimService } from '../service/tim.service';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit{

  displayedColumns = ['id', 'naziv', 'sediste', 'osnovan', 'liga', 'actions'];

  dataSource: MatTableDataSource<TimModel>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public timService: TimService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.timService.getAllTim().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          case 'naziv': return data[property];
          case 'sediste': return data[property];
          case 'osnovan': return data[property].toString();
          case 'liga': return data[property].naziv;
          default: return "default";
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, naziv: string, sediste: string, osnovan: Date, liga: string) {
    const dialog = this.dialog.open(TimDialogComponent, {data: {id: id, naziv: naziv, sediste: sediste, osnovan: osnovan, liga: liga}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        setTimeout(() => {
          this.loadData();
        }, 100)       
      }
    })
  }

  applyFilter(filterValue: string){
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

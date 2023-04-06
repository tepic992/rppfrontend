import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LigaDialogComponent } from '../dialog/liga-dialog/liga-dialog.component';
import { LigaModel } from '../model/liga.model';
import { LigaService } from '../service/liga.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit{

  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];

  //dataSource: Observable<Liga[]>;
  dataSource: MatTableDataSource<LigaModel>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public ligaService: LigaService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    //this.dataSource = this.LigaService.getAllLiga();
    this.ligaService.getAllLiga().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          case 'naziv': return data[property];
          case 'oznaka': return data[property];
          default: return "default";
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, naziv: string, oznaka: string) {
    const dialog = this.dialog.open(LigaDialogComponent, {data: {id: id, naziv: naziv, oznaka: oznaka}});
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

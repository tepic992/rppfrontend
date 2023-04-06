import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NacionalnostDialogComponent } from '../dialog/nacionalnost-dialog/nacionalnost-dialog.component';
import { NacionalnostModel } from '../model/nacionalnost.model';
import { NacionalnostService } from '../service/nacionalnost.service';

@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'skracenica', 'actions'];

  dataSource: MatTableDataSource<NacionalnostModel>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public nacionalnostService: NacionalnostService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.nacionalnostService.getAllNacionalnost().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          case 'skracenica': return data[property];
          case 'naziv': return data[property];
          default: return "default";
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, naziv: string, skracenica: string) {
    const dialog = this.dialog.open(NacionalnostDialogComponent, {data: {id: id, skracenica: skracenica, naziv: naziv}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      console.log(result);
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

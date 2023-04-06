import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IgracDialogComponent } from '../dialog/igrac-dialog/igrac-dialog.component';
import { IgracModel } from '../model/igrac.model';
import { NacionalnostModel } from '../model/nacionalnost.model';
import { TimModel } from '../model/tim.model';
import { IgracService } from '../service/igrac.service';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit{

  displayedColumns = ['id', 'ime', 'prezime', 'datumRodjenja', 'brojReg', 'tim', 'nacionalnost', 'actions'];

  dataSource: MatTableDataSource<IgracModel>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(public igracService: IgracService,
    public dialog: MatDialog) {

    }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.igracService.getAllIgrac().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
           switch(property) {
          case 'id': return data[property];
          case 'nacionalnost': return data[property].naziv;
          case 'tim': return data[property].naziv;
          case 'ime': return data[property];
          case 'prezime': return data[property];
          case 'brojReg': return data[property];
          case 'datumRodjenja': return data[property].toString();
          default: return "default";
        }
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, nacionalnost: NacionalnostModel, tim: TimModel, ime: string, prezime: string, brojReg: string, datumRodjenja: Date) {
    const dialog = this.dialog.open(IgracDialogComponent, {data: {id: id, nacionalnost: nacionalnost, tim: tim,ime: ime, prezime: prezime, brojReg: brojReg, datumRodjenja: datumRodjenja}});
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

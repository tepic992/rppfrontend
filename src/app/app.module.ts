import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { LigaComponent } from './liga/liga.component';
import { NacionalnostComponent } from './nacionalnost/nacionalnost.component';
import { TimComponent } from './tim/tim.component';
import { IgracComponent } from './igrac/igrac.component';

import { LigaService } from './service/liga.service';
import { NacionalnostService } from './service/nacionalnost.service';
import { IgracService } from './service/igrac.service';
import { TimService } from './service/tim.service';

import { IgracDialogComponent } from './dialog/igrac-dialog/igrac-dialog.component';
import { LigaDialogComponent } from './dialog/liga-dialog/liga-dialog.component';
import { NacionalnostDialogComponent } from './dialog/nacionalnost-dialog/nacionalnost-dialog.component';
import { TimDialogComponent } from './dialog/tim-dialog/tim-dialog.component';

import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';





const routes: Routes= [
  {path: 'home', component: HomeComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'about', component: AboutComponent},
  {path: 'liga', component: LigaComponent},
  {path: 'nacionalnost', component: NacionalnostComponent},
  {path: 'igrac', component: IgracComponent},
  {path: 'tim', component: TimComponent}, 
  {path: '', redirectTo: 'home', pathMatch: 'full'}];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    LigaComponent,
    NacionalnostComponent,
    TimComponent,
    IgracComponent,
    IgracDialogComponent,
    LigaDialogComponent,
    NacionalnostDialogComponent,
    TimDialogComponent    
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  LigaService,
  NacionalnostService,
  IgracService,
  TimService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

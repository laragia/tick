import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatDialogModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  imports: [MatSelectModule, MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [MatSelectModule, MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
})
export class CustomMaterialModule { }

import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatDialogModule, MatListModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule, MatTableModule, MatPaginatorModule,
    MatSortModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule, MatTableModule, MatPaginatorModule,
    MatSortModule],
})
export class CustomMaterialModule { }

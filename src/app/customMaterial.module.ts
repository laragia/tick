import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatDialogModule, MatListModule, MatTabsModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule, MatTableModule],
})
export class CustomMaterialModule { }

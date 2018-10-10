import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule, MatDialogModule],
})
export class CustomMaterialModule { }

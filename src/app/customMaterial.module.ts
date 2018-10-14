import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatDialogModule, MatListModule, MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule,
    MatNativeDateModule, MatDatepickerModule, MatInputModule, BrowserAnimationsModule,
    MatDialogModule, MatListModule, MatTabsModule],
})
export class CustomMaterialModule { }

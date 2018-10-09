import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatNativeDateModule],
})
export class CustomMaterialModule { }

import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatDatepickerModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatDatepickerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule, MatDatepickerModule],
})
export class CustomMaterialModule { }

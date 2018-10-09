import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatFormFieldModule]
})
export class CustomMaterialModule { }

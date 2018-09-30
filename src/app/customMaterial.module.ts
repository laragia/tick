import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule]
})
export class CustomMaterialModule { }

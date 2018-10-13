import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './customMaterial.module'
import { AppComponent } from './app.component';
import { TickComponent } from './tick/tick.component';
import { TickDialogComponent } from './tick/tick-dialog/tick-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TickComponent,
    TickDialogComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TickDialogComponent]
})
export class AppModule { }

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CustomMaterialModule } from './customMaterial.module';
import { AppComponent } from './app.component';
import { TickComponent } from './tick/tick.component';
import { TickDialogComponent } from './tick/tick-dialog/tick-dialog.component';
import { FormsModule } from '@angular/forms';
import { TickTableComponent } from './tick/tick-table/tick-table.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { PushNotificationsService } from './tick/notification.service';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(url) {
        return this.sanitizer.bypassSecurityTrustHtml(url);
    }
}

@NgModule({
  declarations: [
    AppComponent,
    TickComponent,
    TickDialogComponent,
    TickTableComponent,
      SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    InlineSVGModule,
    BrowserModule,
    CustomMaterialModule,
    FormsModule, HttpClientModule, InlineSVGModule.forRoot()
  ],
  providers: [PushNotificationsService],
  bootstrap: [AppComponent],
  entryComponents: [TickDialogComponent]
})
export class AppModule { }

import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {LOCALE_ID, NgModule, NO_ERRORS_SCHEMA, Pipe, PipeTransform} from '@angular/core';
import localeDE from '@angular/common/locales/de';
import {CustomMaterialModule} from './customMaterial.module';
import {AppComponent} from './app.component';
import {TickComponent} from './tick/tick.component';
import {TickDialogComponent} from './tick/tick-dialog/tick-dialog.component';
import {FormsModule} from '@angular/forms';
import {TickTableComponent} from './tick/tick-table/tick-table.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {HttpClientModule} from '@angular/common/http';
import {PushNotificationsService} from './tick/notification.service';
import {NgAddToCalendarModule} from '@trademe/ng-add-to-calendar';
import { StartComponent } from './start/start.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {registerLocaleData} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ListDialogComponent} from './list/list-dialog/list-dialog.component';

registerLocaleData(localeDE, 'de');

const appRoutes: Routes = [
  {path: '', redirectTo: 'person', pathMatch: 'full'},
  {path: 'start', component: StartComponent, data: {title: 'Start Component'}},
  {path: 'tick', component: TickComponent, data: {title: 'Tick Component'}},
  {path: 'list', component: ListComponent, data: {title: 'List Component'}}
];

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
    ListDialogComponent,
    TickTableComponent,
    ListComponent,
      SafeHtmlPipe,
      StartComponent,
      NavmenuComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    InlineSVGModule,
    NgAddToCalendarModule,
    BrowserModule,
    CustomMaterialModule,
    FormsModule, HttpClientModule, InlineSVGModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    )
  ],
  providers: [PushNotificationsService, { provide: LOCALE_ID, useValue: 'de-DE' }],
  bootstrap: [AppComponent],
  entryComponents: [TickDialogComponent, ListDialogComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
  private static appRoutes: Routes;
}

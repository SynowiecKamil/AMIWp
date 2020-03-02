import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RemoveDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    HttpClientModule
  ],
  entryComponents: [
    RemoveDialogComponent,
  ],
  providers: [TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

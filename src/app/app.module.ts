import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortableModule } from '@progress/kendo-angular-sortable';


import { AppComponent } from './app.component';
import { KendosortComponent } from './kendosort/kendosort.component';


@NgModule({
  declarations: [
    AppComponent,
    KendosortComponent
  ],
  imports: [
    BrowserModule, SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

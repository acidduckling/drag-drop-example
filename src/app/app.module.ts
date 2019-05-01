import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortableModule } from '@progress/kendo-angular-sortable';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

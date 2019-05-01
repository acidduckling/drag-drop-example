import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { KendosortComponent } from './kendosort/kendosort.component';




@NgModule({
  declarations: [
    AppComponent,
    KendosortComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule, SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

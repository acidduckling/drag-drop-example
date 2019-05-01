import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { KendosortComponent } from './kendosort/kendosort.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragItemComponent } from './drag-drop/drag-item/drag-item.component';




@NgModule({
  declarations: [
    AppComponent,
    KendosortComponent,
    DragDropComponent,
    DragItemComponent
  ],
  imports: [
    BrowserModule, SortableModule, NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

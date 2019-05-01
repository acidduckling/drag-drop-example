import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SortableComponent } from '@progress/kendo-angular-sortable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild(SortableComponent) sortable: SortableComponent;
  itemsA = [];

  itemsB = [];

  counter = 0;

  newItem() {
    const newItem = {
      name: `Item ${this.counter++}`
    };
    this.sortable.addDataItem(newItem, this.itemsA.length);
  }
}

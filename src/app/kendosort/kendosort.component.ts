import { Component, ViewChild } from '@angular/core';
import { SortableComponent } from '@progress/kendo-angular-sortable';

@Component({
  selector: 'app-kendosort',
  templateUrl: './kendosort.component.html',
  styleUrls: ['./kendosort.component.css']
})
export class KendosortComponent {

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

import { Component } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { Item, MoveEvent } from './drag-item/drag-item.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {

  itemsA: Item[] = [
    { name: 'Joe', age: 25 },
    { name: 'Robert', age: 10 },
    { name: 'Harry', age: 50 },
  ];

  itemsB = [];

  move({direction, item}: MoveEvent, index: number, list: Item[]) {
    if (direction === 'up') {
      if (index < 1) {
        return;
      }
      list.splice(index, 1);
      list.splice(index - 1, 0, item);
    } else {
      if (index > list.length) {
        return;
      }
      list.splice(index, 1);
      list.splice(index + 1, 0, item);
    }
  }

  receiveItem(event: DropEvent, srcList: Item[], targetList: Item[]) {
    const item = event.dragData as Item;

    const existing = targetList.findIndex(i => i.name === item.name);
    if (existing !== -1) return;

    const index = srcList.findIndex(i => i.name === item.name);
    srcList.splice(index, 1);
    targetList.push(event.dragData);
  }

}

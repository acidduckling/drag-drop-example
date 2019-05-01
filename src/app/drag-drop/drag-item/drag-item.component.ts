import { Component, OnInit, HostBinding, Output, EventEmitter, Input } from '@angular/core';

export type MoveDirection = 'up' | 'down';

export interface Item {
  name: string;
  age: number;
}

export interface MoveEvent {
  direction: 'up' | 'down';
  item: Item;
  index: number;
}

@Component({
  selector: 'app-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.css']
})
export class DragItemComponent implements OnInit {
  @HostBinding('class.item') hostClass = true;

  @Input() item: Item;
  @Input() index: number;
  @Output() moved = new EventEmitter<MoveEvent>();

  constructor() { }

  ngOnInit() {
  }

  move(direction: MoveDirection, item: Item, index: number) {
    this.moved.emit({ direction, item, index });
  }

}

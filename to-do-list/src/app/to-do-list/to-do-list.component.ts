import { Component, Input } from '@angular/core';
import { ToDoItem } from '../../models/ToDoItem';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() items: ToDoItem[] = [];
  addItem: (name: string) => boolean = (name: string) => {
    if (!name) return false;
    for (let i = 0; i < this.items.length; i ++) {
      if (this.items[i].name === name) return false;
    }
    this.items.push(new ToDoItem(name));
    return true;
  }
  deleteItem: (name: string) => void = (name: string) => {
    if (!name) return;
    for (let i = 0; i < this.items.length; i ++) {
      if (this.items[i].name === name) {
        this.items.splice(i, 1); return;
      }
    }
  }
  toggleStatus: (name: string) => void = (name: string) => {
    if (!name) return;
    for (let i = 0; i < this.items.length; i ++) {
      if (this.items[i].name === name) {
        this.items[i].completed = !this.items[i].completed; return;
      }
    }
  }
}

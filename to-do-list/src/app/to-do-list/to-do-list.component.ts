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
  addItem: (name: string) => boolean | undefined = (name: string) => {
    if (!name) return;
    for (let i = 0; i < this.items.length; i ++) {
      if (this.items[i].name === name) return false;
    }
    this.items.push(new ToDoItem(name));
    return true;
  }
  removeItem: (id: string) => void = (id: string) => {
    for (let i = 0; i < this.items.length; i ++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        return;
      }
    }
  }
  updateStatus: (id: string, completed: boolean) => void = (id: string, completed: boolean) => {
    for (let i = 0; i < this.items.length; i ++) {
      if (this.items[i].id === id) {
        this.items[i].completed = completed;
        return;
      }
    }
  }
}

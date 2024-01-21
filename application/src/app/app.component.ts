import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from '../models/ToDo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "To-Do List";

  toDos: ToDo[] = [];
  newToDo: string = "";

  saveToDo: () => void = () => {
    if (!this.newToDo) return;
    this.toDos.push(new ToDo(this.newToDo));
    this.newToDo = "";
  }

  updateToDo: (index: number) => void = (index) => {
    this.toDos[index].completed = !this.toDos[index].completed;
  }

  deleteToDo: (index: number) => void = (index) => {
    this.toDos.splice(index, 1);
  }
}

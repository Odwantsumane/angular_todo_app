import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStuff } from '../todo-stuff';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `update-todo.component.html`,
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {
  @Input() todo!: TodoStuff;
  updatedTask!: TodoStuff;
  todoService: TodoServiceService = inject(TodoServiceService);

  s: string = "";

  constructor() {

  }

  updateTask(id: number, title: string, type: string, date: string, done: boolean): void {

    this.updatedTask = {
      id: id, title: title, type: type, date: date, done: done
    }
    
    this.todoService.updateWholeTask(this.updatedTask);
  }

}

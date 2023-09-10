import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStuff } from '../todo-stuff';
import { TodoServiceService } from '../todo-service.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList: TodoStuff[] = [];
  todo: TodoStuff | undefined;
  // todoTitle: string = "";
  todoService: TodoServiceService = inject(TodoServiceService);

  constructor() {
    this.todoList = this.todoService.getAllTodoData();
    this.todo = this.todoService.getTodoDataById(1);
  }

  deleteTodo(id: number):  void {
    this.todoService.deleteTodoById(id) 
  }

  onChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const isChecked: boolean = event.target.checked;
      if(isChecked) 
        console.log("isChecked");
      else 
        console.log("is not checked");
    }
   }
}

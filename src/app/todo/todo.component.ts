import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStuff } from '../todo-stuff';
import { TodoServiceService } from '../todo-service.service';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, UpdateTodoComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList: TodoStuff[] = [];
  todo: TodoStuff;
  test: boolean = false;
  todoService: TodoServiceService = inject(TodoServiceService);

  constructor() {
    this.todoList = this.todoService.getAllTodoData();
    this.todo = this.todoService.getTodoDataById(1);
  }

  deleteTodo(id: number):  void {
    
    if(this.todoService.getTodoDataById(id)?.done) 
      this.todoService.deleteTodoById(id);
    else 
      alert("Complete the Task or check the checkbox?");
      
  }

  updateTask(id: number, title: string, type: string, date: string, done: boolean): void {

    // this.todoService.updateTodoById(1,fal)
  }

  update(id: number): void {
    this.todo = this.todoService.getTodoDataById(id);
  }
  

  onChange(event: Event, id: number): void {
    if (event.target instanceof HTMLInputElement) {
      const isChecked: boolean = event.target.checked;
      if(isChecked) { 
        this.todoService.updateTodoById(id, isChecked);
      }  
      else {
        this.todoService.updateTodoById(id, isChecked);
      }
    }
   }
}

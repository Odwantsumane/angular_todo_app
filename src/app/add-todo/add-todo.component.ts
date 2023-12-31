import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoStuff } from '../todo-stuff';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `add-todo-component.html`,
  styleUrls: ['./add-todo.component.css'],
})

export class AddTodoComponent {
  //dismiss: string = '';
  newId: number = 0;
  successSubmit: boolean = false;
  todo: TodoStuff = {id: 0, title: "", type: "", date: "", done: false};
  todoService: TodoServiceService = inject(TodoServiceService);
  
  constructor () {
  }
   
  addTodo(title: string, type: string): void {
    const milliseconds = new Date();
    const date = new Date(milliseconds);
    var date_stringed = `${date}`;
    var date_stringed = date_stringed.substring(0,25);


    if(title && type) {
      this.successSubmit = false;
       
      this.todo = {id: ++this.newId, title: title, type: type, date:  date_stringed, done: false};

      // add
      this.todoService.addTodoData(this.todo);
    } else {
      this.successSubmit = true;
    }
  }
 
  dismissModal(): void {
     
  }
}

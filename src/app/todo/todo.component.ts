import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStuff } from '../todo-stuff';
import { TodoServiceService } from '../todo-service.service';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';
import { timeInterval } from 'rxjs';

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
  updatedId: number = 0;
  todoService: TodoServiceService = inject(TodoServiceService);

  constructor() {
    this.todoList = this.todoService.getAllTodoData();
    
    const milliseconds = new Date();
    const date = new Date(milliseconds);
    var date_stringed = `${date}`;
    var date_stringed = date_stringed.substring(0,15);
    
    //check date
    // todoList2.forEach(todo => {
      
    //   if(date_stringed === todo.date.substring(0,15)) {
    //     todo.date = "today";
    //   }
    //   this.todoList.push(todo);
      
    // })
    
    this.todo = this.todoService.getTodoDataById(1);
  }

  deleteTodo(id: number):  void {
    
    // if(this.todoService.getTodoDataById(id)?.done) 
    //   this.todoService.deleteTodoById(id);
    // else 
    //   alert("Complete the Task or check the checkbox?");



    // delete task
    //console.log("hello world")
    this.todoService.deleteTodoById(id);
  }

  updateTask(id: number, title: string, type: string, date: string, done: boolean): void {

    // this.todoService.updateTodoById(1,fal)
  }

  update(id: number): void {
    this.todo = this.todoService.getTodoDataById(id);
  }

  updateID(id: number): void {
    this.updatedId = id;
  }
  

  onChange(event: Event, id: number): void {
    if (event.target instanceof HTMLInputElement) {
      const isChecked: boolean = event.target.checked;
      if(isChecked) { 
        this.todoService.updateTodoById(id, isChecked);
        
        // delete task after 3 seconds when its done
        setTimeout(() => { this.deleteTodo(id) }, 10000);
      }  
      else {
        this.todoService.updateTodoById(id, isChecked);
      }
    }
   }
}

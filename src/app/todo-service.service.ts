import { Injectable } from '@angular/core';
import { TodoStuff } from './todo-stuff';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoTemp: TodoStuff = {id: 0, title: "", type: "", date: "", done: false};

  todoList: TodoStuff[] = []

  constructor() { }

  getAllTodoData(): TodoStuff[] {
    return this.todoList;
  }
  
  getTodoDataById(id: number): TodoStuff {
    const find = this.todoList.find(todo => todo.id === id);
    if(find)
      return find;
    else
      return this.todoTemp;
  }

  deleteTodoById(id: number): number {
    if(this.todoList.find(todo => todo.id === id)) {
      this.todoList.splice(this.todoList.findIndex(todo => todo.id === id), 1);
      return 1;
    }
    return 0;
  }

  addTodoData(todo: TodoStuff): number {
    if(this.todoList.push(todo))
      return 1;
    else 
      return 0;
  }

  updateTodoById(id: number, done: boolean): number {
    if(this.todoList.find(todo => todo.id === id)) {
      this.todoList[this.todoList.findIndex(todo => todo.id === id)].done = done;
      return 1;
    }
    return 0;
  }

  updateWholeTask(Task: TodoStuff): number {
    // remove unupdated task
    if(this.deleteTodoById(Task.id)) {
      this.addTodoData(Task);
      return 1;
    }
      
    return 0;
  }
}

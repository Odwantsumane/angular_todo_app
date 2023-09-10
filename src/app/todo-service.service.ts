import { Injectable } from '@angular/core';
import { TodoStuff } from './todo-stuff';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoList: TodoStuff[] = [
    {
      id: 1,
      title: 'Todo 1',
      type: 'Garage',
      date: '10:00 AM today',
      done: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      type: 'Garage',
      date: '10:00 AM today',
      done: true,
    },
    {
      id: 3,
      title: 'Todo 3',
      type: 'Garage',
      date: '10:00 AM today',
      done: false,
    },
    {
      id: 4,
      title: 'Todo 4',
      type: 'Garage',
      date: '10:00 AM today',
      done: false,
    },
    {
      id: 5,
      title: 'Todo 5',
      type: 'Garage',
      date: '10:00 AM today',
      done: true,
    },
    {
      id: 6,
      title: 'Todo 6',
      type: 'Garage',
      date: '10:00 AM today',
      done: false,
    },
    {
      id: 7,
      title: 'Todo 7',
      type: 'Garage',
      date: '10:00 AM today',
      done: true,
    }
    ]

  constructor() { }

  getAllTodoData(): TodoStuff[] {
    return this.todoList;
  }
  
  getTodoDataById(id: number): TodoStuff | undefined{
    return this.todoList.find(todo => todo.id === id);
  }

  deleteTodoById(id: number): number {
    if(this.todoList.find(todo => todo.id === id)) {
      this.todoList.splice(this.todoList.findIndex(todo => todo.id === id), 1);
      return 1;
    }
    return 0;
  }
}

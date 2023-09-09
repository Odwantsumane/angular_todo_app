import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStuff } from '../todo-stuff';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  // @Input() todo!: TodoStuff;
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
}

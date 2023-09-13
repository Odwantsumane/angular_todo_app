import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoComponent, AddTodoComponent, UpdateTodoComponent],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  submitted: boolean = true;


}

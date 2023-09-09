import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
}

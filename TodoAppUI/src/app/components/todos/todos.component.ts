import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos: Todo[] = [
    {
      id: '1',
      description: 'Learn Angular',
      createdDate: new Date(),
      isCompleted: true,
      completedDate: new Date()
    },
  ];

  newTodo: Todo = {
    id: '',
    description: '',
    createdDate: new Date(),
    isCompleted: false,
    completedDate: new Date()
  };


  constructor(private todoService: TodoService, ) { }

  ngOnInit(): void {
    this.getAllTodos();

  }

  getAllTodos() {
    this.todoService.getAllTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      }
    }
    );
  }


  addTodo() {
    this.todoService.addTodoItem(this.newTodo).subscribe({
      next: (todo) => {
        this.getAllTodos();
      }
    });

    };

    onCompletedChange(id: string, todo: Todo) {
      todo.isCompleted = !todo.isCompleted;
      this.todoService.updateTodoItem(id, todo).subscribe({
        next: (response) => {
          this.getAllTodos();
        }
      });
    }
}

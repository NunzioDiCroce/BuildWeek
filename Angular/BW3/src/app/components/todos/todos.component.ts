import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Todo } from 'src/app/models/todo.interface';

// import servizio
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // definzione array per "accogliere" gli oggetti "restituiti" dalla get
  todos: Todo[] | undefined;

  constructor( private todosSrv:TodosService ) { } // dichiarazione parametro servizio

  ngOnInit(): void {

    // subscribe metodo servizio
    this.todosSrv.getTodos().subscribe((_todos:Todo[]) => {this.todos = _todos});
    console.log(this.todos)
  }

}

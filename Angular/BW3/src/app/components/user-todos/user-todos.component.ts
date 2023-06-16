import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Todo } from 'src/app/models/todo.interface';

// import servizio
import { TodosService } from 'src/app/services/todos.service';

// import Router, ActivateRoute
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss']
})
export class UserTodosComponent implements OnInit {

  // definizione variabile todos
  todos: Todo[] | undefined;
  // definzione variabile userId
  userId!: number;

  constructor( private toDosSrv:TodosService, private route:ActivatedRoute, private router:Router ) { } // dichiarazione parametri servizio e routing

  ngOnInit(): void {

    // recupero user todos
    this.route.params.subscribe((_parameter) => {
      this.userId = +_parameter['userId'];
      //this.getUserTodosComponent()
      this.toDosSrv.getUserTodos(this.userId).subscribe((_todos) => {this.todos = _todos})
    })
  }

  // SOLUZIONE ABBANDONATA A FOVORE DEL METODO DEL SERVICE DIRETTAMENTE IN ONINIT
  // definzione metodo del COMPONENT che richiama il metodo del SERVICE per recupero user todos
  /*getUserTodosComponent() {
    this.toDosSrv.getUserTodos(this.userId).subscribe((_todos) => {this.todos = _todos})
  }*/

  // SOLUZIONE ABBANDONATA A FAVORE DI [routerLink]="['/users']" NEL TEMPLATE
  // definizione metodo per ritorno a users
  /*goToUsers() {
    this.router.navigate(['/users'])
  }*/

}

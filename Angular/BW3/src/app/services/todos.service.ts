import { Injectable } from '@angular/core';

// import interfaccia
import { Todo } from '../models/todo.interface';

// import HttpClient per gestione metodi http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor( private http:HttpClient ) { } // dichiarazione parametro HttpCLient

  // definizione metodo per recupero todos
  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }

}

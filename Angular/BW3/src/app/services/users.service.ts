import { Injectable } from '@angular/core';

// import interfaccia
import { User } from '../models/user.interface';

// import HttpClient per gestione metodi http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient ) { } // dichiarazione parametro HttpClient

  // definizione metodo per recupero users
  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

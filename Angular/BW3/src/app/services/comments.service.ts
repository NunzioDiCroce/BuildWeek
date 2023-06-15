import { Injectable } from '@angular/core';

// import interfaccia
import { Comment } from '../models/comment.interface';

// import HttpClient per gestione metodi http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private http:HttpClient ) { } // dichiarazione paramentro HttpClient

  // definizione metodo per recupero comments
  getComments() {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
  }

}

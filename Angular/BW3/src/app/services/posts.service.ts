import { Injectable } from '@angular/core';

// import interfaccia
import { Post } from '../models/post.interface';

// import HttpClient per gestione metodi http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http:HttpClient ) { } // dichiarazione parametro HttpClient

  // definizione metodo per recupero posts
  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }


}

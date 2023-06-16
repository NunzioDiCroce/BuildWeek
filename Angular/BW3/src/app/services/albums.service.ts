import { Injectable } from '@angular/core';

// import interfaccia
import { Album } from '../models/album.interface';

// import HttpClient per gestione metodi http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor( private http:HttpClient ) { } // dichiarazione paramentro HttpClient

  // definizione metodo per recupero albums
  getAlbums() {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }

  // definizione metodo per recupero user albums
  getUserAlbums(_userId:number) {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums/?userId=${_userId}`)
  }
}

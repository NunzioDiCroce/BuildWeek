import { Injectable } from '@angular/core';

// import interfaccia
import { Photo } from '../models/photo.interface';

// import HttpClient per gestione metodi http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private http:HttpClient ) { } // dichiarazione paramentro HttpClient

  // definizione metodo per recupero photos
  getPhotos() {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
  }

}

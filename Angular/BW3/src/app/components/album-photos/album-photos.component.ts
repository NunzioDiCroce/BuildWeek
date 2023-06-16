import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Photo } from 'src/app/models/photo.interface';

// import servizio
import { PhotosService } from 'src/app/services/photos.service';

// import ActivatedRoute, Router per gestione routing
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {

  // definzione variabile photos
  photos: Photo[] | undefined;
  // definizione variabile albumId
  albumId!: number;

  constructor( private photosSrv:PhotosService, private route:ActivatedRoute ) { } // dichiarazione parametri servizio e routing al netto di Router in favore di [routerLink] nel template

  ngOnInit(): void {

    // recupero album photos
    this.route.params.subscribe((_parameter) => {
      this.albumId = +_parameter['albumId'];
      this.photosSrv.getAlbumPhotos(this.albumId).subscribe((_photos) => {this.photos = _photos})
    })
  }

}

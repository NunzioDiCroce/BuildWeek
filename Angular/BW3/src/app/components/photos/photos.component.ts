import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Photo } from 'src/app/models/photo.interface';

// import servizio
import { PhotosService } from 'src/app/services/photos.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  // definizione array per "accogliere" gli oggetti "restituiti" dalla get
  photos: Photo[] | undefined;

  constructor( private photosSrv:PhotosService ) { } // dichiarazione paramentro servizio

  ngOnInit(): void {

    // subscribe metodo servizio
    this.photosSrv.getPhotos().subscribe((_photos:Photo[]) => {this.photos = _photos});
    console.log(this.photos)
  }

}

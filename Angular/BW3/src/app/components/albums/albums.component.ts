import { Component, OnInit } from '@angular/core';

// import inyterfaccia
import { Album } from 'src/app/models/album.interface';

// import servizio
import { AlbumsService } from 'src/app/services/albums.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  // definizione array per "accogliere" gli oggetti "restituiti" dalla get
  albums: Album[] | undefined;

  constructor( private albumsSrv:AlbumsService ) { } // dichiarazione paramentro servizio

  ngOnInit(): void {

    // subscribe metodo servizio
    this.albumsSrv.getAlbums().subscribe((_albums:Album[]) => {this.albums = _albums});
    console.log(this.albums)
  }

}

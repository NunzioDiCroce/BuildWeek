import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Album } from 'src/app/models/album.interface';

// import servizio
import { AlbumsService } from 'src/app/services/albums.service';

// import ActivatedRoute, Router
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  // definizione variabile albums
  albums: Album[] | undefined;
  // definizione variabile userId
  userId!: number;

  constructor( private albumsSrv:AlbumsService, private route:ActivatedRoute ) { } // dichiarazione parametri servizi e routing AL NETTO DI Router IN QUANTO IL ROUTING VIENE GESTITO CON [routerLink]="['/users']" NEL TEMPLATE

  ngOnInit(): void {

    // recupero user albums
    this.route.params.subscribe((_parameter) => {
      this.userId = +_parameter['userId'];
      this.albumsSrv.getUserAlbums(this.userId).subscribe((_albums) => {this.albums = _albums})
    })

  }

}

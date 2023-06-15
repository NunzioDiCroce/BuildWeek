import { Component, OnInit } from '@angular/core';

// import interfaccia
import { User } from 'src/app/models/user.interface';

// import servizio
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // definizione array per "accogliere" gli oggetti "restituiti" dalla GET
  users: User[] | undefined;

  constructor( private usersSrv:UsersService ) { } // dichiarazione parametro servizio

  ngOnInit(): void {

    // subscribe metodo servizio
    this.usersSrv.getUsers().subscribe((_users:User[]) => {this.users = _users});
    console.log(this.users)
  }

}

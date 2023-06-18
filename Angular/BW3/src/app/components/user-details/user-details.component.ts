import { Component, OnInit } from '@angular/core';

// import interfaccia
import { User } from 'src/app/models/user.interface';

// import servizio
import { UsersService } from 'src/app/services/users.service';

// import ActivatedRoute, Router
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  // definzione variabile users
  users: User[] | undefined;
  // definizione variabile id
  id!: number;

  constructor( private usersSrv:UsersService, private route:ActivatedRoute ) { } // dichiarazione paramentri servizio e routing

  ngOnInit(): void {

    // recupero user details
    this.route.params.subscribe((_parameter) => {
      this.id = +_parameter['id'];
      this.usersSrv.getUserDetails(this.id).subscribe((_users) => {this.users = _users})
    })
  }

}

import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Comment } from 'src/app/models/comment.interface';

// import servizio
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  // definizione array per "accogliere" gli oggetti "restituiti" dalla get
  comments: Comment[] | undefined;

  constructor( private commentsSrv:CommentsService ) { } // dichiarazione paramentro servizio

  ngOnInit(): void {

    // subscribe metodo service
    this.commentsSrv.getComments().subscribe((_comments:Comment[]) => {this.comments = _comments});
    console.log(this.comments)
  }

}

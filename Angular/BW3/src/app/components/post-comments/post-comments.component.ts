import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Comment } from 'src/app/models/comment.interface';

// import servizio
import { CommentsService } from 'src/app/services/comments.service';

// import ActivatedRoute, Router
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  // definizione variabile comments
  comments: Comment[] | undefined;
  // definizione variabile postId
  postId!: number;

  constructor( private commentsSrv:CommentsService, private route:ActivatedRoute ) { } // dichiarazione parametri servizio e routing

  ngOnInit(): void {

    // recupero post comments
    this.route.params.subscribe((_parameter) => {
      this.postId = +_parameter['postId'];
      this.commentsSrv.getPostComments(this.postId).subscribe((_comments) => {this.comments = _comments})
    })

  }

}

import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Post } from 'src/app/models/post.interface';

// import servizio
import { PostsService } from 'src/app/services/posts.service';

// import ActivatedRoute, Router per gestione routing
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  // definizione variabile posts
  posts: Post[] | undefined;
  // definzione variabile UserId
  userId!: number;

  constructor( private postsSrv: PostsService, private route:ActivatedRoute ) { } // dichiarazione parametri servizio e routing

  ngOnInit(): void {

    // recupero user posts
    this.route.params.subscribe((_parameter) => {
      this.userId = +_parameter['userId'];
      this.postsSrv.getUserPosts(this.userId).subscribe((_posts) => {this.posts = _posts})
    })
  }

}

import { Component, OnInit } from '@angular/core';

// import interfaccia
import { Post } from 'src/app/models/post.interface';

// import servizio
import { PostsService } from 'src/app/services/posts.service';

// import subscription per sottoscrizione observable
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // definizione array per "accogliere" gli oggetti "restituiti" dalla get
  posts: Post[] | undefined;

  constructor( private postsSrv:PostsService ) { } // dichiarazione paramentro servizio

  ngOnInit(): void {

    // subscribe observable per recupero posts
    this.postsSrv.getPosts().subscribe((_posts:Post[]) => {this.posts = _posts});
    console.log(this.posts)
  }

}

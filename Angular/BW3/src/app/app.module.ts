import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import Route, RouterModule per gestione rotte
import { Route, RouterModule } from '@angular/router';

// import HttpClientModule per gestione metodi http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { CommentPostsComponent } from './components/comment-posts/comment-posts.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// definizione array delle rotte di tipo Route
const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:userId', component: UserPostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/:postId', component: PostCommentsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:userId', component: UserAlbumsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:albumId', component: AlbumPhotosComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:userId', component: UserTodosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    UserTodosComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
    CommentPostsComponent,
    UserPostsComponent,
    PostCommentsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    // import RouterModule con metodo forRoot applicato alle rotte
    RouterModule.forRoot(routes),
    // import HttpClientModule per gestione metodi http
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// service
import { FirebaseService } from './services/firebase.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'edit/book/:id', component: EditBookComponent},
  {path: 'delete-book/:id', component: DeleteBookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'books-notes-app'),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  books: Observable<any[]>;
  favoriteBooks: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  getBooks() {
    this.books = this.db.list('/books').valueChanges();
    return this.books;
  }

  getFavoriteBooks(): Observable<any> {
    return  new Observable((observer) => {
      this.db.list('/books')
      .query
      .orderByChild('rate')
      .startAt(4)
      .once('value', (data) => {
        observer.next(data.val());
      });
    });
  }

}

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

  getFavoriteBooks() {
    this.favoriteBooks = this.db.list('/books').map(books => {
      const topRateBooks = books.filter(item => item.rate > 4);
      return topRateBooks;
    })
  }

}

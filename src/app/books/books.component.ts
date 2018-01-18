import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  allBooks:any;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.firebaseService.getBooks().subscribe(books=>{
      this.allBooks = books;
    })
  }

}

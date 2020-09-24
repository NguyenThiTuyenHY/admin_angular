import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Book, BookService } from '../../lib/book.service';
import { catchError, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
  constructor(private booksevice:BookService) { }
  items: MenuItem[];
  books: Book[];
  getbooks(){
    this.booksevice.getbook().subscribe(res=>{
      this.books = res['result'];
    })
  }
  ds = [
    {
      "id":1,
      "votes": 10,
      "title": "Tieu de 10",
      "link": "Https:zhaoxiaotanghaosoai"
    }
  ]
  voteUp(){

  }
  voteDown(){

  }
  addArticle(title: HTMLInputElement,LINK: HTMLInputElement){
    alert("hello" + title.value);
  }
  ngOnInit(): void {
      this.getbooks();
      console.log(this.books);
  }
}

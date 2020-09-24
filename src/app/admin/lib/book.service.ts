import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface Book{
  name:string;
  price:number;
  author:string;
}
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  book:Book[];
  getbook(){
    return this.http.get<Book[]>('../assets/book.json');
  }
}

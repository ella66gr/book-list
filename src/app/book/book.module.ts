import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookService } from './book.service';


@NgModule({
  declarations: [
    ViewBooksComponent],
  imports: [
    CommonModule
  ],
  providers: [
    BookService
  ],
  
})
export class BookModule { }

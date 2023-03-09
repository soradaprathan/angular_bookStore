import { Component,ElementRef  } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent 
{
  public selectedAuthor: string | undefined;
  public booksPerPage = 4;
  public selectedPage = 1;


  constructor(private repository: BookRepository, private elementRef: ElementRef) {}

  get books(): Book[]
  {
    const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
    return this.repository.getBooks(this.selectedAuthor)
    .slice(pageIndex, pageIndex + this.booksPerPage);
  }

  get authors(): string[]
  {
    return this.repository.getAuthors();
  }

  changeAuthor(newAuthor?: string): void
  {
    this.selectedAuthor = newAuthor;
  }
  changePage(newPage: number): void
  {
    this.selectedPage = newPage;
  }

  changePageSize(event: any): void {
    this.booksPerPage = Number(event.target.value);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getBooks(this.selectedAuthor).length / this.booksPerPage)
  }

  /*
  get pageNumbers(): number[]
  {
    return Array(Math.ceil(this.repository
      .getBooks(this.selectedAuthor).length / this.booksPerPage))
      .fill(0).map((x, i) => i +1);
  }
  */

}

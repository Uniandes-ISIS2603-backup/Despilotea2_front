import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorService } from './author.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { BookModule } from '../book/book.module';
import { FilterPipe }from './filter.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AuthorListComponent, AuthorDetailComponent,FilterPipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    BookModule,
    FormsModule
  ],
  providers: [AuthorService],
  exports: [AuthorListComponent, AuthorDetailComponent ]
})
export class AuthorModule { }

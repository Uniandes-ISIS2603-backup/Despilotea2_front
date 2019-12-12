import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorService } from './author.service';




@NgModule({
  declarations: [AuthorListComponent, AuthorDetailComponent],
  imports: [
    CommonModule
  ],
  providers: [AuthorService],
  exports: [AuthorListComponent, AuthorDetailComponent ]
})
export class AuthorModule { }

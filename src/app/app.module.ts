import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AuhtorComponent } from './author/auhtor.component';
import { BookComponent } from './book/book.component';
import { OrganizationComponent } from './organization/organization.component';
import { PrizeComponent } from './prize/prize.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './main/footer/footer.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { UserModule } from './user/user.module';
import { ClienteModule } from './cliente/cliente.module';
import { NotFoundModule } from './notFound/notFound.module';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { NotFoundComponent } from './notFound/notFound/notfound.component';
import { BookListComponent } from './book/book-list/book-list.component';
import {AuthorListComponent} from './author/author-list/author-list.component';
import {AuthorDetailComponent} from './author/author-detail/author-detail.component';
import { HomeModule } from './home/home.module';
import { EditorialModule } from './editorial/editorial.module';

@NgModule({
  declarations: [
    AppComponent,
    AuhtorComponent,
    AuthorDetailComponent,
    AuthorListComponent,
    BookComponent,
    BookListComponent,
    OrganizationComponent,
    PrizeComponent,
    ReviewComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    ClienteModule,
    NotFoundModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalDialogModule.forRoot(),
    ReactiveFormsModule,
    EditorialModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    NgxPermissionsModule.forRoot(),
    NgbModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

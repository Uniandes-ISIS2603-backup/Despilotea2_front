import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuhtorComponent } from './auhtor/auhtor.component';
import { BookComponent } from './book/book.component';
import { EditorialComponent } from './editorial/editorial.component';
import { OrganizationComponent } from './organization/organization.component';
import { PrizeComponent } from './prize/prize.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuhtorComponent,
    BookComponent,
    EditorialComponent,
    OrganizationComponent,
    PrizeComponent,
    ReviewComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

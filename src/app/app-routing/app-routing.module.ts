import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { NotFoundComponent } from '../notFound/notFound/notfound.component';
import { BookListComponent } from '../book/book-list/book-list.component';
import { AuhtorComponent } from '../author/auhtor.component';
import {AuthorListComponent} from '../author/author-list/author-list.component';
import {AuthorDetailComponent} from '../author/author-detail/author-detail.component';

import { HomeComponent } from '../home/home/home.component';
import { EditorialListComponent } from '../editorial/editorial-list/editorial-list.component';


const routes: Routes = [
 
    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: UserLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'signup',
                component: UserSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
        ]
    },
    {
        path: 'books',
        component: BookListComponent,
    },
    {
        path: 'authors',
        children: [
            {
                path: 'list',
                component: AuthorListComponent
            },
            {
                path: ':id',
                component: AuthorDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
    {
        path:'editorials',
        component:EditorialListComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
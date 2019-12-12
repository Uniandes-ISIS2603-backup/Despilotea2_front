import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { NotFoundComponent } from '../notFound/notFound/notfound.component';
import { BookListComponent } from '../book/book-list/book-list.component';
import { AuhtorComponent } from '../auhtor/auhtor.component';
import { EditorialComponent } from '../editorial/editorial.component';
import { HomeComponent } from '../home/home.component';

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
        component: BookListComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    },
    {
        path: 'authors',
        component: AuhtorComponent
    },
    {
        path:'editorials',
        component:EditorialComponent
    },
    {
        path:'home',
        component:HomeComponent
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
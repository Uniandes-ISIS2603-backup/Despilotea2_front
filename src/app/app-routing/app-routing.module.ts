import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { NotFoundComponent } from '../notFound/notFound/notfound.component';

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
      {path: '', redirectTo: 'home',pathMatch: 'full'},
      { path: '**', component: NotFoundComponent }
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
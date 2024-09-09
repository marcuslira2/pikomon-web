import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { TrainersComponent } from './components/trainers/trainers.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'home',
        component: HomeComponent,
    },
    {
        path:'signin',
        component: SigninComponent
    },
    {
        path:'trainers',
        component: TrainersComponent
    }
];


import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home';
import { IncompatibleComponent } from './component/incompatible/incompatible';
import { SobreComponent } from './component/sobre/sobre';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'onde-nao-usar', component: IncompatibleComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

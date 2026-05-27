import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewProduct } from '../components/NewProduct/NewProduct';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "**",
        component: Home
    },
    {
        path: "NewProduct",
        component: NewProduct
    }
];

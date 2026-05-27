import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewProduct } from '../components/NewProduct/NewProduct';
import { Products } from './pages/products/products';

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
    },
    {
        path: "Products",
        component: Products
    }
];

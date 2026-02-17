import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { Dashboard } from './page/dashboard/dashboard';
import { Item } from './page/item/item';
import { Order } from './page/order/order';
import { AddItem } from './page/item/add-item/add-item';
import { ViewAll } from './page/item/view-all/view-all';
import { Customer } from './page/customer/customer';
import { AddCustomer } from './page/customer/add-customer/add-customer';
import { ViewAllCustomer } from './page/customer/view-all-customer/view-all-customer';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'item',
        component:Item,
        children: [
          {
            path: 'add-item',
            component: AddItem,
          },
          {
            path: 'view-item',
            component: ViewAll,
          },
        ],
      },
      {
        path: 'customer',
        component: Customer,
        children: [
          {
            path: 'add-customer',
            component: AddCustomer,
          },
          {
            path: 'view-customer',
            component: ViewAllCustomer,
          },
        ],
      },
      {
        path: 'order',
        component: Order,
      }
    ]
  }
];

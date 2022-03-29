import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../Pages/Dashboard/Dashboard')),
    type: "private"
  },
  {
    path: '/notes',
    component: lazy(() => import('../Pages/Notes/Notes')),
    type: "private"
  },
  {
    path: '/customer',
    component: lazy(() => import('../Pages/Customer/Customer')),
    type: "private"
  },
  {
    path: '/account',
    component: lazy(() => import('../Pages/Account/Account')),
    type: "private"
  },
  {
    path: '/reports',
    component: lazy(() => import('../Pages/Reports/Reports')),
    type: "private"
  }
];

export default routes;


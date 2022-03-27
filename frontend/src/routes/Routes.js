import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../Pages/Dashboard/Dashboard')),
    exact: true
  },
  {
    path: 'notes',
    component: lazy(() => import('../Pages/Notes/Notes')),
    exact: true
  },
  {
    path: 'customer',
    component: lazy(() => import('../Pages/Customer/Customer')),
    exact: true
  },
  {
    path: 'account',
    component: lazy(() => import('../Pages/Account/Account')),
    exact: true
  },
  {
    path: 'reports',
    component: lazy(() => import('../Pages/Reports/Reports')),
    exact: true
  }
];

export default routes;


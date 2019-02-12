import { Home, Category } from '../views/components';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/categories',
    component: Category,
    exact: true
  }
];

export default routes;


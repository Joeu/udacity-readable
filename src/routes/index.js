import { Home, CategoryContainer } from '../views/components';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/categories',
    component: CategoryContainer,
    exact: true
  }
];

export default routes;


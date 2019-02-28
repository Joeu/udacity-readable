import { HomeContainer, CategoryContainer, PostDetailsContainer } from '../views/components';

const routes = [
  {
    path: '/',
    component: HomeContainer,
    exact: true
  },
  {
    path: '/react/posts',
    component: CategoryContainer,
    exact: true
  },
  {
    path: '/redux/posts',
    component: CategoryContainer,
    exact: true
  },
  {
    path: '/udacity/posts',
    component: CategoryContainer,
    exact: true
  },
  {
    path: '/posts/*',
    component: PostDetailsContainer,
    exact: true
  }
];

export default routes;


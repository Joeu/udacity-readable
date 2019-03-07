import { HomeContainer, CategoryContainer, PostDetailsContainer } from '../views/components';

const routes = [
  {
    path: '/',
    component: HomeContainer,
    exact: true
  },
  {
    path: '/:category/posts',
    example: '/react/posts',
    component: CategoryContainer,
    exact: true
  },
  {
    path: '/:category/posts/:id',
    example: '/react/posts/8xf0y6ziyjabvozdd253nd',
    component: PostDetailsContainer,
    exact: true
  }
];

export default routes;


import {
  Questions,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'questions',
      name: 'Questions page',
      component: Questions,
      isIndex: true,
    },
  ],
};

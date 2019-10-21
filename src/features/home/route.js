import {
  Questions,
} from './';
import {DetailQuestion} from './'
export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'questions',
      name: 'Questions page',
      component: Questions,
      isIndex: true,
    },
    {
       path: '/:id', name: 'TestDetail', component: DetailQuestion
    }
  ],
};

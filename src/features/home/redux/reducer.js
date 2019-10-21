import initialState from './initialState';
import { reducer as loadQuestionsReducer } from './loadQuestions';
import { reducer as nextPageReducer } from './nextPage';

const reducers = [
  loadQuestionsReducer,
  nextPageReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}

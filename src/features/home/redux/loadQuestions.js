import {
  HOME_LOAD_QUESTIONS_BEGIN,
  HOME_LOAD_QUESTIONS_SUCCESS,
  HOME_LOAD_QUESTIONS_FAILURE,
  HOME_LOAD_QUESTIONS_DISMISS_ERROR,
} from './constants';
import axios from 'axios';
// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function loadQuestions(p, l) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: HOME_LOAD_QUESTIONS_BEGIN,
    });
    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      //const doRequest = args.error ? Promise.reject(new Error()) : Promise.resolve();

      const doRequest = axios.get(
        `https://tungtung-sample.herokuapp.com/tests/data/questions?page=${p}&limit=${l}&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTcyNzY0MDgzLCJleHAiOjE1NzI5MzY4ODN9.zU_KZ6TotjZSE6CPY3zFlMD1rg6dYM8yRKDuaNy8_Jo`,
      );
      doRequest.then(
        res => {
          dispatch({
            type: HOME_LOAD_QUESTIONS_SUCCESS,
            data: res.data,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        err => {
          dispatch({
            type: HOME_LOAD_QUESTIONS_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissLoadQuestionsError() {
  return {
    type: HOME_LOAD_QUESTIONS_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_LOAD_QUESTIONS_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        loadQuestionsPending: true,
        loadQuestionsError: null,
      };

    case HOME_LOAD_QUESTIONS_SUCCESS:
      // The request is success
      return {
        ...state,
        listQuestion: action.data,
        loadQuestionsPending: false,
        loadQuestionsError: null,
      };

    case HOME_LOAD_QUESTIONS_FAILURE:
      // The request is failed
      return {
        ...state,
        loadQuestionsPending: false,
        loadQuestionsError: action.data.error,
      };

    case HOME_LOAD_QUESTIONS_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        loadQuestionsError: null,
      };

    default:
      return state;
  }
}

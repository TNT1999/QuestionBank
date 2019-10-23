const initialState = {
  loadQuestionsPending: false,
  loadQuestionsError: null,
  listQuestion:[],
  curPage:1,
  totalPages:null,
  totalQuestion:null,
  curItemPerPage:20,
  positionScroll:null,
  loadTotalQuestionPending: false,
  loadTotalQuestionError: null
};

export default initialState;

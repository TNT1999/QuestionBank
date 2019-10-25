import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from './Question';
import * as actions from './redux/actions';
import Nav from './Nav';
import Pagination from './Pagination';
export class Questions extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const { listQuestion, curItemPerPage, curPage } = this.props.home;
    if (listQuestion.length === 0) {
      this.props.actions.loadQuestions(curPage, curItemPerPage);
    }
  }
  render() {
    const { listQuestion, loadQuestionsPending } = this.props.home;
    return (
      <React.Fragment>
        <Pagination />
        <Nav />
        <div className="list-questions" ref="loadlist">
          {loadQuestionsPending ? (
            <div className="loading">Loading...</div>
          ) : (
            listQuestion.map((val, ind) => (
              <Question key={val._id} question={val} />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);

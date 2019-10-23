import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Answers from './Answers';
import ContentQuestion from './ContentQuestion';
import Editor from 'tungtung-super-editor';

export class DetailQuestion extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { listQuestion } = this.props.home;
    const { id } = this.props.match.params;
    const index = listQuestion.findIndex(x => x._id === id);
    return index >= 0 ? (
      <div className="wrap-content-question">
        <div className="f-question">
          <ContentQuestion content={listQuestion[index].content} />
          <Answers answers={listQuestion[index].answers} />
        </div>
        {listQuestion[index].solution && (
          <div className="slt">
            <label>Solution</label>
            <Editor value={listQuestion[index].solution} readOnly />
          </div>
        )}
      </div>
    ) : (
      <div className="nq">No Question</div>
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
)(DetailQuestion);

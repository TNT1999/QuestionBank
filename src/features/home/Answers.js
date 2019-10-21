import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Answer from './Answer';
export class Answers extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="list-answer">
        <Answer
          ABCD={'A'}
          answercontent={
            'It is a long established fact that a reader will be distracted by the readable content of a page'
          }
        />
        <Answer
          ABCD={'B'}
          answercontent={
            'It is a long established fact that a reader will be distracted by the readable content of a page'
          }
        />
        <Answer
          ABCD={'C'}
          answercontent={
            'It is a long established fact that a reader will be distracted by the readable content of a page'
          }
        />
        <Answer
          ABCD={'D'}
          answercontent={
            'It is a long established fact that a reader will be distracted by the readable content of a page'
          }
        />
      </div>
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
)(Answers);

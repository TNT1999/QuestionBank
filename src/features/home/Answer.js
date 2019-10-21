import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Answer extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    ABCD: PropTypes.string.isRequired,
    answercontent: PropTypes.any.isRequired,
  };

  render() {
    return (
      <div className="answer">
        <div className="answer-main">
          <div className="abcd">{this.props.ABCD}</div>
          <div className="answer-content">
            <span>{this.props.answercontent}</span>
          </div>
        </div>
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
)(Answer);

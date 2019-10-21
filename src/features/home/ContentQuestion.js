import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Question extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="content-question">
        <div className="wrap-question">
          <div className="question-content">
            { this.props.home.currentQuestion%2===0 ?" chawn Bảng biến thiên dưới dây là của hàm số nào Bảng biến thiên dưới dây là của hàm số nào Bảng biến thiên dưới dây là của hàm số nào Bảng biến thiên dưới dây là của hàm số nào":
              " le Bảng biến thiên dưới dây là của hàm số nào Bảng biến thiên dưới dây là của hàm số nào Bảng biến thiên dưới dây là của hàm số nào Bảng biến thiên dưới dây là của hàm số nào"}
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
)(Question);

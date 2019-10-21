import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from './Question';
import * as actions from './redux/actions';
import Nav from './Nav';
export class Questions extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.actions.loadQuestions();
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="list-questions">
          {this.props.home.listQuestion.map((val, ind) => (
            <Question key={ind} />
          ))}
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

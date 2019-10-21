import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom';

export class Question extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="w-question">
        <Link to="/detailquestion" className="question">
          <div className="w-content">
            <span className="content">
              Cho một số phát biểu về hoán vị gen như sau Cho một số phát biểu về hoán vị gen như
              sauCho một số phát biểu về hoán vị gen như sauCho một số phát biểu về hoán vị gen như
              sau:
            </span>
          </div>
          <div className='status displaycenter'><p>Need Review</p></div>
          <div className='correctAns displaycenter'>1</div>
          <div className="type displaycenter"><p>Mulltiple choices</p></div>
          <div className="solution displaycenter"><p>No Solution</p></div>
          <div className='createdAt displaycenter'>2 hours ago</div>
          <div className='updatedAt displaycenter'>60 minutes ago</div>
        </Link>
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

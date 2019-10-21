import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Pagination extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  
  componentDidMount() {
    this.refs.ipitem.value = '10';
    this.refs.ipp.value = '1';
    this.refs.ipitem.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        // Do work
        console.log('enter item limit')
      }
    });
    this.refs.ipp.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        // Do work
        console.log('enter pages ');
      }
    });
  }
  render() {
    return (
      <div className="home-pagination">
        <div className="w-ip">
          <input type="number" step="5" min="5" max="100" placeholder="..." ref="ipitem" />
          items/page
        </div>
        <div className="w-ip">
          <input type="number" min="1" placeholder="..." ref="ipp" />
          /3013 pages
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
)(Pagination);

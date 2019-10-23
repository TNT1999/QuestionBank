import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Icon, Intent } from '@blueprintjs/core';

export class Pagination extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  componentDidUpdate() {
    this.refs.ipitem.value = this.props.home.curItemPerPage;
    this.refs.ipp.value = this.props.home.curPage;
  }
  componentDidMount() {
    const { actions, home } = this.props;
    const { refs } = this;
    !home.totalQuestion &&
      actions.loadTotalQuestion().then(() => {
        actions.changeTotalPage();
      });
    refs.ipitem.value = home.curItemPerPage;
    refs.ipp.value = home.curPage;
    refs.ipitem.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        // Do work
        actions.changeItemPage(parseInt(this.value));
        actions.changeTotalPage();
        refs.ipp.focus();
      }
    });
    refs.ipp.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        // Do work
        // if (home.curPage != this.value) {
        actions.changePage(parseInt(this.value));
        actions.loadQuestions(refs.ipp.value, refs.ipitem.value);
        //actions.loadQuestions(home.curPage, home.curItemPerPage);

        // }
      }
    });
    //   this.refs.ipitem.addEventListener('blur', function(event) {
    //     // Do work
    //     if (home.curItemPerPage != this.value) {
    //       // actions.changeItemPage(this.value);
    //       //actions.changeTotalPage();
    //       console.log('blur item limit');
    //     }
    //   });
    //   this.refs.ipp.addEventListener('blur', function(event) {
    //     // Do work
    //     console.log('blur pages ');
    //     actions.changePage(this.value);
    //   });
  }
  render() {
    const { refs } = this;
    const { actions, home } = this.props;

    return (
      <div className="home-pagination">
        <div className="w-ip">
          <input type="number" step="5" min="5" max="100" placeholder="..." ref="ipitem" />
          items/page
        </div>
        <div className="w-ip">
          <Icon
            icon="chevron-left"
            iconSize={24}
            className="arr"
            onClick={() => {
              actions.changePage(parseInt(refs.ipp.value) - 1),
                actions.loadQuestions(refs.ipp.value, refs.ipitem.value);
            }}
          />
          <input type="number" min="1" placeholder="..." ref="ipp" />/{this.props.home.totalPages}{' '}
          pages
          <Icon
            icon="chevron-right"
            iconSize={24}
            className="arr"
            onClick={() => {
              actions.changePage(parseInt(refs.ipp.value) + 1),
                actions.loadQuestions(refs.ipp.value, refs.ipitem.value);
            }}
          />
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

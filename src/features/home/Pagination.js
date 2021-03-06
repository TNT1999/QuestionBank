import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Icon } from '@blueprintjs/core';

export class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curItemPerPage: props.home.curItemPerPage||20,
      curPage: props.home.curPage || 1,
    };
  }
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  componentDidUpdate() {
    this.refs.ipitem.value = this.state.curItemPerPage;
    this.refs.ipp.value = this.state.curPage;
  }
  componentDidMount() {
    const { actions, home } = this.props;
    !home.totalQuestion &&
      actions.loadTotalQuestion().then(() => {
        actions.changeTotalPage();
      });
  }

  handleInput = e => {
    if (e.key !== 'Enter') return;
    this.props.actions.loadQuestions(this.state.curPage, this.state.curItemPerPage);
  };

  handleChangeCurItemPerPage = e => {
    this.setState({ curItemPerPage: e.target.value }, () =>
      this.props.actions.changeItemPage(parseInt(this.state.curItemPerPage,10)),
    );
  };

  handleChangeCurPage = e => {
    this.setState({ curPage: e.target.value }, () =>
      this.props.actions.changePage(parseInt(this.state.curPage,10)),
    );
  };

  getTotalPage = () => {
    const { totalQuestion, curItemPerPage } = this.props.home;
    return Math.floor(totalQuestion / curItemPerPage);
  };
  handleClickMinus = () => {
    this.setState({ curPage: parseInt(this.state.curPage,10) - 1 }, () => {
      this.props.actions.changePage(parseInt(this.state.curPage,10));
      this.props.actions.loadQuestions(
        parseInt(this.state.curPage,10),
        parseInt(this.state.curItemPerPage,10),
      );
    });
  };
  handleClickPlus = () => {
    this.setState({ curPage: parseInt(this.state.curPage,10) + 1 }, () => {
      this.props.actions.changePage(parseInt(this.state.curPage,10));
      this.props.actions.loadQuestions(
        parseInt(this.state.curPage,10),
        parseInt(this.state.curItemPerPage,10),
      );
    });
  };
  render() {
    const totalPages = this.getTotalPage();
    return (
      <div className="home-pagination">
        <div className="w-ip">
          <input
            onChange={this.handleChangeCurItemPerPage}
            type="number"
            step="5"
            min="5"
            max="100"
            placeholder="..."
            ref="ipitem"
            value={this.state.curItemPerPage}
          />
          items/page
        </div>
        <div className="w-ip">
          <Icon icon="chevron-left" iconSize={24} className="arr" onClick={this.handleClickMinus} />
          <input
            onKeyDown={this.handleInput}
            onChange={this.handleChangeCurPage}
            value={this.state.curPage}
            type="number"
            min="1"
            placeholder="..."
            ref="ipp"
          />
          /{totalPages} pages
          <Icon icon="chevron-right" iconSize={24} className="arr" onClick={this.handleClickPlus} />
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

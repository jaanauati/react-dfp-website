import React, { Component } from 'react';
import PropTypes from 'prop-types;'
import GithubCorner from 'react-github-corner';
import SideBar from './sidebar';
import Head from './head';

export default class extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { children, title } = this.props;
    return (
      <main>
        <Head {...this.props} />
        <GithubCorner href="https://github.com/jaanauati/react-dfp" bannerColor="#70B7FD" />
        <header>
          <h1>
            {' '}
            React DFP documentation:
            <span>
              {' '}
              { title }
              {' '}
            </span>
            {' '}

          </h1>
        </header>
        <div className="page-body">
          <SideBar />
          <div className="page-body__example">
            { children }
          </div>
        </div>
      </main>
    );
  }
}

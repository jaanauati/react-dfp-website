import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { children } = this.props;
    return (
      <main>
        <Head {...this.props} />
        <GithubCorner href="https://github.com/jaanauati/react-dfp" bannerColor="#70B7FD" />
        <header>
          <h1>
            React DFP Documentation
          </h1>
          &nbsp;
          <span className="middot hidden-mobile"> · </span>
          &nbsp;
          <span className="row-mobile">
            <a href="https://travis-ci.org/jaanauati/react-dfp" rel="nofollow">
              <img src="https://travis-ci.org/jaanauati/react-dfp.svg?branch=master" alt="Build Status" />
            </a>
            &nbsp;
            <a href="https://github.com/jaanauati/react-dfp" rel="nofollow">
              <img src="https://img.shields.io/npm/dm/react-dfp.svg?label=DL" alt="Npm Downloads" />
            </a>
            &nbsp;
            <a className="hidden-mobile" href="https://github.com/jaanauati/react-dfp" rel="nofollow">
              <img src="https://img.shields.io/bundlephobia/minzip/react-dfp.svg" alt="Minizipped size" />
            </a>
            &nbsp;
            <a href="https://github.com/jaanauati/react-dfp/blob/master/LICENSE" rel="nofollow">
              <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license" />
            </a>
            &nbsp;
            <a href="https://github.com/jaanauati/react-dfp/blob/master/LICENSE" rel="nofollow">
              <img src="https://img.shields.io/npm/dependency-version/react-dfp/peer/react.svg" alt="Dependencies" />
            </a>
          </span>
          <div className="row-mobile">
            <a className="show-mobile" href="https://github.com/jaanauati/react-dfp" rel="nofollow">
              <img src="https://img.shields.io/bundlephobia/minzip/react-dfp.svg" alt="Minizipped size" />
            </a>
          </div>
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

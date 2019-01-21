import { Component } from 'react';
import GithubCorner from 'react-github-corner';
import SideBar from './sidebar';
import Head from './head';

export default class extends Component {
  render() {
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
              {this.props.title}
              {' '}
            </span>
            {' '}

          </h1>
        </header>
        <div className="page-body">
          <SideBar />
          <div className="page-body__example">
            { this.props.children }
          </div>
        </div>
      </main>
    );
  }
}

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import PageBody from '../components/pageBody';

class ExamplePage extends Component {
  static propTypes = {
    router: PropTypes.shape({
      query: PropTypes.shape({
        example: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    query: PropTypes.shape({
      example: PropTypes.string,
      title: PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    const { router: { query: routerQuery = {} }, query = {} } = props;
    this.state = {
      title: routerQuery.title || query.title || 'Basic Example',
      example: routerQuery.example || query.example || 'basic',
    };
  }

  static async getInitialProps({ router, query }) {
    return {
      title: router.query.title || query.title || 'Basic Example',
      example: router.query.example || query.example || 'basic',
    };
  }

  static getDerivedStateFromProps(props) {
    const {
      title,
      example,
    } = (props.router.query || {});
    if (title && example) {
      return { title, example };
    }
    return null;
  }

  render() {
    let module;
    try {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line global-require, import/no-dynamic-require, react/destructuring-assignment,
      module = require(`../components/ads/${this.state.example}`);
    } catch (ex) {
      module = {};
    }
    const {
      Intro, Example, Hints, code,
    } = module;
    return (
      <PageBody {...this.props} {...this.state}>
        { Example
          ? (
            <Fragment>
              { Intro
                ? (
                  <Fragment>
                    <h2 className="page-body__title">
                      <i className="fas fa-angle-double-right" />
                      &nbsp;
                      {this.state.title}
                    </h2>
                    <Intro />
                    <h2>
                      {' '}
                      <i className="far fa-window-maximize" />
                      {' '}
                      Example:
                    </h2>
                  </Fragment>
                )
                : null }
              <div className="page-body__example__ad">
                <span className="page-body__example__ad__content"> ADS GO HERE... </span>
                <Example />
              </div>
              <h3>
                {' '}
                <i className="fas fa-file-code" />
                {' '}
                Code:
              </h3>
              <div className="page-body__example__code">
                <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
                  {code}
                </SyntaxHighlighter>
              </div>
              <h3>
                {' '}
                <i className="far fa-sticky-note" />
                {' '}
Notes:
              </h3>
              <Hints />
            </Fragment>
          )
          : (
            <Fragment>
              <span> Work in progress... </span>
            </Fragment>
          )
                }
      </PageBody>
    );
  }
}

export default withRouter(props => <ExamplePage {...props} />);

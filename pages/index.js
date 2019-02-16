import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import PageBody from '../components/pageBody';


export default () => (
  <PageBody title="">
    <h2 className="page-body__title">
      Welcome to the react-dfp documentation site!
    </h2>
    <p>
      React-dfp is a React implementation of the google DFP api.
      This package is inspired in the awesome library jquery.dfp,
      and aims to provide its same ease of usage but, of course,
      taking into consideration the react concepts & lifecycle features.
    </p>
    <br/>
    <h3>
      <i className="fas fa-file-code" />
      &nbsp;Install:
    </h3>
    <SyntaxHighlighter language="bash" style={docco}>
      $ npm install --save react-dfp
    </SyntaxHighlighter>
    <br />
    <h3>
      <i className="fas fa-book-open" />
      &nbsp;Documentation and Usage:
    </h3>
    <p>
      The sidebar contains lot of links that the describe how to use react-dfp.
      The documentation is divided in the following sections:
    </p>
    <ol>
      <li> Examples showing common scenarios. </li>
      <li> AdSlot documentation </li>
      <li> DFPSlotsProvider documentation </li>
      <li> DFPManager api docs.</li>
    </ol>
    <p>
      We recommend you to start reading the examples so you can have an
      idea of how the API works.
    </p>
    <p>
      Additionally, each section provides their own live examples that
      you can review and debug.
    </p>
    <br/>
    <h3>
      <i className="fas fa-window-maximize" />
      &nbsp;Debugging.
    </h3>
    <p>
      You can use the following tools to debug your pages:
    </p>
    <ol>
      <li>
        Google dfp console: to use it, just append the query string argument&nbsp;
        <strong>?googfc</strong>
        &nbsp;to the url and refresh the page. After your page reloads you will be able to toggle the dfp console, which allows you to inspect and debug your ads. You can find more information&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/admanager/answer/2462712?hl=en">here</a>.
      </li>
      <li>
        React developer tools:&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react-devtools">link</a>
        .
      </li>
    </ol>
  </PageBody>
);

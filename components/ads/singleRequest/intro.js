import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the
        {' '}
        <strong>singleRequest</strong>
        {' '}
        property to define the
        strategy to fire the network/ad requests:
      </p>
      <ol>
        <li> - When true (default): the Single request architecture (SRA) is enabled. </li>
        <li> - When false: the Multi request strategy is used.</li>
      </ol>
      <p>
        Refer to the gpt documentation for more details:
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://support.google.com/admanager/answer/183282?hl=en"
        >
            link
        </a>
        .
      </p>
    </Fragment>
  );
}

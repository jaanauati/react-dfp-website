import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>singleRequestIsEnabled()</strong>
        {' '}
        to get the current/selected request strategy.
      </p>
      <ol>
        <li>
          <strong> true </strong>
          : Single Request Architecture enabled (SRA).
        </li>
        <li>
          <strong> false </strong>
          : Multi-Request strategy enabled.
        </li>
      </ol>
      <p>
        <strong>
          Important note:
          {' '}
        </strong>
        For more details, please see documentation about the method
        <br />
        <strong>
          <a href="/dfpmanager/configuresinglerequest">
            {'DFPManager.configureSingleRequest()'}
          </a>
        </strong>
        .
      </p>
    </Fragment>
  );
}

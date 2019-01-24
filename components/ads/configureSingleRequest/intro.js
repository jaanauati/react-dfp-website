import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>configureSingleRequest([boolean])</strong>
        {' '}
        to manually select the strategy to trigger network requests.
      </p>
      <ol>
        <li>
          <strong> true </strong>
          : Enables Single Request Architecture (SRA).
        </li>
        <li>
          <strong> false </strong>
          : Use Multi-Request strategy. (default)
        </li>
      </ol>
      <p>
        <strong>
          Important note:
          {' '}
        </strong>
        although this method will be always available
        and is meant for
        {'\'public usage\''}
        ,
        <br />
        <strong>
          <a href="/dfpslotsprovider/singlerequest/">
            {'<DFPSlotProvider singleRequest />'}
          </a>
        </strong>
        &nbsp;is the recomended way to approach this behavior, please
        use that one one if possible.
      </p>
      <p>
        See google gpt docs for details:
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/admanager/answer/183282?hl=en"
        >
          link
        </a>
      </p>
    </Fragment>
  );
}

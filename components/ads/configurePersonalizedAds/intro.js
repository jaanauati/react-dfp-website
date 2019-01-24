import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>configurePersonalizedAds([boolean])</strong>
        {' '}
        to manually configure the stragy to follow to serve ads:
      </p>
      <ol>
        <li>
          <strong> true </strong>
          : Serve personalized ads (via cookie/tracking).
        </li>
        <li>
          <strong> false </strong>
          : Do not serve personalized ads.
        </li>
      </ol>
      <p>
        <strong>
          Important note:
          {' '}
        </strong>
        although this method will be always available
        and is meant for
        {' \'public usage\''}
        ,
        <br />
        <strong>
          <a href="/dfpslotsprovider/personalizedads/">
            {'<DFPSlotProvider personalizedAds />'}
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
          href="https://support.google.com/admanager/answer/7678538?hl=en"
        >
          link
        </a>
      </p>
    </Fragment>
  );
}

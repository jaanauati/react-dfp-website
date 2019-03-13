import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>lazyLoad</strong>
        {' '}
        to render "Lazy loading" ads in your pages. This technique improves both:
        page load time and ads viewability. Accepted values for this prop are:
      </p>
      <ol>
        <li> false (default): Lazy load is disabled. </li>
        <li> true: lazy loading is enabled, this means that ad slots will not render until they approach user's viewport. </li>
        <li>
          object: additional options to customize lazy the loading behavior. Accepted attributes are:
          fetchMarginPercent (number), renderMarginPercent (number) and mobileScaling (number).
          Please see the&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developers.google.com/doubleclick-gpt/reference#googletag.PubAdsService_enableLazyLoad"
          >
            gpt documentation
          </a> for details.
        </li>
      </ol>
      <p>
        The example showed below is just an implementation of the example provided
        by the google gpt docs (but, of course using react-dfp): &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://support.google.com/admanager/answer/4578089#lazyloading"
        >
          link
        </a>
        .
      </p>
    </Fragment>
  );
}

import React, { Fragment } from 'react';

const EXTERNAL_LINK = 'https://developers.google.com/doubleclick-gpt/reference#googletag.PubAdsService_setRequestNonPersonalizedAds';
export default function () {
  return (
    <Fragment>
      <p>
        Use the prop
        {' '}
        <strong>personalizedAds</strong>
        {' '}
        to configure
        whether your page should receive personalized ads or not.
      </p>
      <ol>
        <li> - When true (default): ads personalization is enabled. </li>
        <li> - When false: personalization gets disabled.</li>
      </ol>
      <p>
        Refer to the gpt documentation for more details:
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={EXTERNAL_LINK}
        >
          link
        </a>
        .
      </p>
    </Fragment>
  );
}

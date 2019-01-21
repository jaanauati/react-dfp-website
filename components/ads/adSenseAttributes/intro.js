import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
                The
        {' '}
        <strong>adSenseAttributes</strong>
        {' '}
        property is meant to
        configure a set of extra adSense keywords for your ads.
        This property is accepted by both components:
      </p>
      <ol>
        <li> DFPSlotsProvider </li>
        <li> AdSlot </li>
      </ol>
      <p>
        You can find more information about this topic in the official
        gpt documentation:
        &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/adsense_attributes"
        >
          link
        </a>
        .
      </p>
    </Fragment>
  );
}

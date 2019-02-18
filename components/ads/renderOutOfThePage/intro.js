import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>renderOutOfThePage</strong>
        {' '}
        to configure whether a given <strong>&lt;AdSlot&gt;</strong> should be rendered
        out of the page or not.
      </p>
      <p>
        This property is disabled by default. For details about the out-of-page
        creatives please refer to the official dfp documentation:
        <a
          href="https://support.google.com/admanager/answer/6088046?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>.
      </p>
    </Fragment>
  );
}

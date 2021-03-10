import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        <strong>New !!</strong> please upgrade to version >= 0.20.0 to use this feature
      </p>
      <p>
        Use the property
        {' '}
        <strong>limitedAds</strong>
        {' '}
        to fetch the GPT script from a cookie-less domain
      </p>
      <ol>
        <li> false (default): use standard domain </li>
        <li> true: use cookie-less domain. </li>
        <li>
          Please see the&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developers.google.com/publisher-tag/guides/general-best-practices#load_from_an_official_source"
          >
            Limited ads documentation
          </a> for details.
        </li>
      </ol>
    </Fragment>
  );
}

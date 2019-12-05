import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
        Use this property to prevent ads from loading on initial page load.
      </p>
      <p>
        As detailed in the gpt documentation (link below), if this option is
        enabled, ads can be loaded with manual calls to&nbsp;
        <Link href="/dfpmanager/refresh/"><a href="/dfpmanager/refresh/">DFPManager.refresh()</a></Link>.
      </p>
      <p>
        For more information refer to the gpt official documentation:
        <Link href="https://developers.google.com/doubleclick-gpt/reference#googletag.PubAdsService_disableInitialLoad"><a target="_blank">link</a></Link>
        .
      </p>
    </Fragment>
  );
}

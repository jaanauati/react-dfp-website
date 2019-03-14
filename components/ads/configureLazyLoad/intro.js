import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>configureLazyLoad(enable, [config])</strong>
        {' '}
        to lazy load the ads in your pages. This technique improves both:
        page load time and ads viewability.
      </p>
      <p> This function takes the following parameters: </p>
      <ol>
        <li> enable: a boolean that tells whether to enable or not the lazy loading behavior. </li>
        <li>
          config (default null): an optional object with attributes meant to configure
          the lazy loading behavior.
          Accepted attributes are: fetchMarginPercent (number), renderMarginPercent (number)
          and mobileScaling (number).
          Please see the&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developers.google.com/doubleclick-gpt/reference#googletag.PubAdsService_enableLazyLoad"
          >
            gpt documentation
          </a> for details about these attributes.
        </li>
      </ol>
      <p>
        The example showed below is just an implementation of the example provided
        by the google gpt docs (but, of course using {"react-dfp's"} DFPManager): &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://support.google.com/admanager/answer/4578089#lazyloading"
        >
          link
        </a>
        .
      </p>
      <p>
        <strong>
          Important note:
          {' '}
        </strong>
        although this method will be always available and is meant for
        {'\'public usage\''}
        ,
        <br />
        <strong>
          <a href="/dfpslotsprovider/lazyload/">
            {'<DFPSlotProvider lazyLoad />'}
          </a>
        </strong>
        &nbsp;is the recomended way to approach this behavior, please
        use that one one if possible.
      </p>
    </Fragment>
  );
}

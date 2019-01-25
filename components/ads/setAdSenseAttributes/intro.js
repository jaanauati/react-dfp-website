import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>setAdSenseAttributes({'{'}...attributes{'}'})</strong>
        {' '}
        to manually configure global AdSense attributes for your page.
      </p>
      <p>
        This method takes an object as parameter, you can use it pass
        arbitrary variables.
      </p>
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
          <a href="/dfpslotsprovider/adsenseattributes/">
            {'<DFPSlotProvider adSenseAttributes />'}
          </a>
        </strong>
        &nbsp;is the recomended way to approach this feature, please
        use that one if possible.
      </p>
      <p>
        See google gpt docs for details:
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developers.google.com/doubleclick-gpt/adsense_attributes"
        >
          link
        </a>
      </p>
    </Fragment>
  );
}

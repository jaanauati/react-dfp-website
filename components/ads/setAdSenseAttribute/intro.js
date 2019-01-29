import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>setAdSenseAttribute(name, value)</strong>
        {' '}
        to manually configure an AdSense attribute for your page.
      </p>
      <p>
        This method takes two parameter:
      </p>
      <ol>
        <li>
          name: attribute name (string).
        </li>
        <li>
          value: attribute value (string).
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

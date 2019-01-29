import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>getAdSenseAttribute(name)</strong>
        {' '}
        to read the value of an arbitrary AdSense attribute. Attributes
        can be set via&nbsp;
        <a href="/dfpslotsprovider/adsenseattributes/">
          {'<DFPSlotsProvider adSenseAttributes={} />'}
        </a>
        &nbsp;or via&nbsp;
        <a href="/dfpmanager/setadsenseattributes">
          {'DFPManager.setAdSenseAttributes({...attributes})'}
        </a>
        &nbsp;, or ultimately via&nbsp;
        <a href="/dfpmanager/setadsenseattribute">
          {'DFPManager.setAdSenseAttribute(name, value)'}
        </a>.
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

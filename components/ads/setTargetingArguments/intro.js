import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>setTargetingArguments({'{'}...attributes{'}'})</strong>
        {' '}
        to manually configure custom targeting parameters for your ad slots.
      </p>
      <p>
        This method takes an object as parameter, you can use it to pass
        any amount of arbitrary variables.
      </p>
      <p>
        <strong>
          Important note:
          {' '}
        </strong>
        Although this method will be always available and is meant for
        {' \'public usage\''}
        ,
        <br />
        <strong>
          <a href="/dfpslotsprovider/targetingarguments/">
            {'<DFPSlotProvider targetingArguments />'}
          </a>
        </strong>
        &nbsp;or&nbsp;
        <strong>
          <a href="/adslot/targetingarguments/">
            {'<AdSlot targetingArguments />'}
          </a>
        </strong>
        &nbsp;are the recomended ways to approach this feature, so, if
        possible you should use them instead.
      </p>
      <p>
        You can find more information about this topic in the official
        gpt documentation:
        &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/reference#googletag.PassbackSlot_setTargeting"
        >
          link
        </a>
        .
      </p>
    </Fragment>
  );
}

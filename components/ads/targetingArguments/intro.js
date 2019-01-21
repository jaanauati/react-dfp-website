import React from 'react';
import { Fragment } from 'react';

export default function (props) {
  return (
    <Fragment>
      <p>
                Use the
        {' '}
        <strong>targetingArguments</strong>
        {' '}
property to
                configure custom targeting paramters in your ad slots.
                The property is accepted by the following two components.
      </p>
      <ol>
        <li> DFPSlotsProvider </li>
        <li> AdSlot </li>
      </ol>
      <p>
                When you set it via DFPSlotsProvider, all the ad slots will be
                provided with the configured values. On the other hand, if you
                only need some ads to have a given set of targeting paramters,
                you can just pass the prop to them.
      </p>
      <p>
                You can find more information about this topic in the official
                gpt documentation:
                &nbsp;
        <a
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

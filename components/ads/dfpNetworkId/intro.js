import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
              Use the property
        {' '}
        <strong>dfpNetworkId</strong>
        {' '}
to configure the
              dfp id you'd like to use in your app. There are possible ways in
              which you can configure this prop:
      </p>
      <ol>
        <li> via the DFPSlotsProvider component </li>
        <li> or via AdSlot </li>
      </ol>
    </Fragment>
  );
}

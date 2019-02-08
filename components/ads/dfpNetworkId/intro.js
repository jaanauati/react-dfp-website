import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
        Use the property <strong>dfpNetworkId</strong> to configure the
        dfp id you'd like to use in your app. There are two possible
        ways in which you can configure this prop:
      </p>
      <ol>
        <li> via the &lt;DFPSlotsProvider /&gt; component </li>
        <li> or via &lt;AdSlot /&gt; </li>
      </ol>
    </Fragment>
  );
}

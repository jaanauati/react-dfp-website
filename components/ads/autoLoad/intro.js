
import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
                The
        {' '}
        <bold>autoLoad</bold>
        {' '}
autoload property is used to have
                control of the initializations of the ads when using the
                &lt;DFPSlotsProvider&gt;. When enabled (default), the ads are
                initialized in the page as soon as the &lt;DFPSlotsProvider&gt;
                component is mounted.
      </p>
      <p>
                In some cases you'll want to postpone ads renderization until
                some event ocurrs (reacting to any posible user interaction, or
                timeout, etc).
      </p>
      <p>
                This property is typically used in combination with the method
        <Link href="/dfpmanager/load"><a>DFPManager.load()</a></Link>
,
                that you can use to manually initialize the ads in your page.
      </p>
    </Fragment>
  );
}

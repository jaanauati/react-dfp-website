
import { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
                In some scenarios, under certain conditions, your application
                might need to refresh ads, sometimes reacting to some user actions
                (for instance when the user browses a photo gallery), or sometimes,
                we'd like to have our app refreshing the ads at a defined time
                interval (forinstance, every 5 minutes).
      </p>
      <p>
                The following example demonstrates how to accomplish refreshable
                ads with react dfp. In this case, we make use of the following
                three pieces:
      </p>
      <p>
        <strong>- DFPSlotsProvider</strong>
: we use it to configure global
                settings (dfp id, etc).
      </p>
      <p>
        <strong>- AdSlot</strong>
: used to define ad slots in your page.
      </p>
      <p>
        <strong>- DFPManager.refresh()</strong>
: after the ads have
                been rendered, we use this method to refresh them at a defined
                time interval.
      </p>
    </Fragment>
  );
}

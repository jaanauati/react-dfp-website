import React from 'react';
import Link from 'next/link';

export default () => (
  <ol>
    <li>
      Line 13: configure default / global properties using the
      <strong>&lt;DFPSlotProvider&gt;</strong>. Notice we pass the property
      <bold>disableInitialLoad</bold> so ads should not load on initial page
      load.
    </li>
    <li>
      Lines 15 and 18: we define two ad-slots using the
      <strong>&lt;AdSlot&gt;</strong> component.
    </li>
    <li>
      Line 8: we manually load ads by calling &nbsp;
      <Link href="/dfpmanager/refresh"><a href="/dfpmanager/refresh">
        DFPManager.refresh()
      </a></Link> three seconds after the ad slots were created.
    </li>
  </ol>
);

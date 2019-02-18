import React from 'react';

export default () => (
  <ol>
    <li> Lines 8: configure a global dfpNetworkId via <strong>&lt;DFPSlotProvider&gt;</strong>.</li>
    <li>
      Line 10: we define an ad-slot using the <strong>&lt;AdSlot&gt;</strong> component and
      configure the AdSense attribute &apos;site_url&apos; using the property
      <strong> adSenseAttributes </strong>.
    </li>
    <li>
      Line 13: we define another ad slot, in this case the slot supports the
      following sizes: 300x250, 300x600 and &apos;fluid&apos;.
    </li>
  </ol>
);

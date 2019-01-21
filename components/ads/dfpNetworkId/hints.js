import React from 'react';

export default () => (
  <ol>
    <li> Lines 8: configure a global dfpNetworkId via &lt;DFPSlotProvider&gt;.</li>
    <li> Line 10: we define an ad-slot using the &lt;AdSlot&gt; component, given that we don't pass the prop, this ad picks the dfpNetworkId provided via &lt;DFPSlotProvider&gt;</li>
    <li> Line 13: we define another ad-slot, this time we set a different dfp-id using the property dfpNetworkId.</li>
  </ol>
);

import React from 'react';

export default () => (
  <ol>
    <li> Lines 8: configure a global dfpNetworkId via <strong>&lt;DFPSlotProvider&gt;</strong>. </li>
    <li> Line 10: we define an ad-slot using the <strong>&lt;AdSlot&gt;</strong> component, given that we don't pass the prop, this ad picks the dfpNetworkId provided via <strong>&lt;DFPSlotProvider&gt;</strong></li>
    <li> Line 13: we define another ad-slot, this time we set a different dfp-id using the property dfpNetworkId.</li>
  </ol>
);

import React from 'react';

export default () => (
  <ol>
    <li> Lines 8-15: configure default / global properties using the <strong>&lt;DFPSlotProvider&gt;</strong>.</li>
    <li> Line 17: define an ad-slot using the <strong>&lt;AdSlot&gt;</strong> component.</li>
    <li>
      {' '}
      Line 20: define a second ad-slot using the <strong>&lt;AdSlot&gt;</strong> component. We use the property
      <bold>slotId</bold>
      {' '}
      to define a custom id for dom element that contains the ad (a div with id=&quot;test-id&quot;).
    </li>
  </ol>
);

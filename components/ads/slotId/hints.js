import React from 'react';

export default () => (
  <ol>
    <li> Lines 8-15: configure default / global properties using the &lt;DFPSlotProvider&gt;.</li>
    <li> Line 17: define an ad-slot using the &lt;AdSlot&gt; component.</li>
    <li>
      {' '}
Line 20: define a second ad-slot using the &lt;AdSlot&gt; component. We use the property
      <bold>slotId</bold>
      {' '}
to define a custom id for dom element that contains the ad (a div with id="test-id").
    </li>
  </ol>
);

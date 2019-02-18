import React from 'react';

export default () => (
  <ol>
    <li> Lines 8-15: configure default / global properties using the <strong>&lt;DFPSlotProvider&gt;</strong>.</li>
    <li> Line 13: define an ad-slot using the <strong>&lt;AdSlot&gt;</strong> component, configure a function that prints text to the console right after the slot gets rendered.</li>
    <li>
      {' '}
Line 20: define a second ad-slot using the <strong>&lt;AdSlot&gt;</strong> component; we use the property
      <bold>onSlotRender</bold>
      {' '}
to configure a function that is executed when the ad is rendered.
    </li>
  </ol>
);

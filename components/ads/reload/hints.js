import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 17, 20, 23: we define three ad slots using the&nsp;
      <strong>&lt;AdSlot&gt;</strong> component.
    </li>
    <li>
      Lines 15: Given that we declare a&nbsp;
      <strong>&lt;DFPSlotsProvider&gt;</strong>&nbsp; component, the ad
      slots are loaded as soon as the component is mounted.
    </li>
    <li>
      Lines 8-10: We tie a callback to a timer that expires 5 seconds after
      the component is mounted (and its ads initialized); this function
      uses the method <strong>DFPManager.reload(...)</strong> to arbitrary
      reload the ad slots: 'test1', 'test2'.
    </li>
  </ol>
);

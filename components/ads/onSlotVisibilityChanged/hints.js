import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 8-15: configure default / global properties using the&nbsp;
      <strong>&lt;DFPSlotProvider&gt;</strong>.
    </li>
    <li>
      Line 13: we define an ad-slot using the <strong>&lt;AdSlot&gt;</strong> component,
      and using the prop <bold>onSlotVisiblityChanged</bold> we configure an callback that
      will be execute everytime that the event <bold>SlotVisibilityChangedEvent</bold>
      is fired for this slot.
    </li>
    <li>
      {' '}
      Line 20: we define a second ad-slot using the <strong>&lt;AdSlot&gt;</strong>&nbsp;
      component, we use the prop <bold>onSlotVisiblityChanged</bold> we configure
      an callback that will be execute everytime that the event&nbsp;
      <bold>SlotVisibilityChangedEvent</bold> is fired for this slot.
    </li>
  </ol>
);

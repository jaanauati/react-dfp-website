import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 8-11 configure default / global properties using the
      <strong>&lt;DFPSlotProvider&gt;</strong>. We use the property&nbsp;
      <strong>lazyLoad</strong>&nbsp;to enable lazy loading ads and to pass
      configurations to customize the behavior (see documentation above for
      details).
    </li>
    <li> Line 13: define an ad-slot using the <strong>&lt;AdSlot&gt;</strong> component.</li>
    <li> Line 16: define another ad-slot using the <strong>&lt;AdSlot&gt;</strong> component.</li>
  </ol>
);

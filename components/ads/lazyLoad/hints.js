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
    <li>
      Lines 13,16,19: declare three ad-slots using the <strong>&lt;AdSlot&gt;</strong>
      &nbsp;component.
    </li>
  </ol>
);

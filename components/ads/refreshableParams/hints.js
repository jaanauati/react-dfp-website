import React from 'react';

export default () => (
  <ol>
    <li>
      Line 22: Declare a toplevel&nbsp;
      <strong>&lt;DFPSlotProvider&gt;</strong>
      , this instance provides two things: 1) Basic configuration params
      that are shared among all the ads in the page and 2) Takes care of
      initializing ads as soon as the component gets mounted.
    </li>
    <li>
      Lines 20-29: We define three ad slots.
    </li>
    <li>
      Lines 6-9: using setInterval, we refresh the ad slots identified by
      the ids &quot;refreshable&quot; and &quot;refreshable-2&quot; every
      30 seconds.
    </li>
    <li>
      Lines 13: clear internal loop before unmounting this component.
    </li>
  </ol>
);

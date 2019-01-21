import React from 'react';

export default () => (
  <ol>
    <li>
            Line 21: Declare a toplevel &lt;DFPSlotProvider&gt;, this instance
            provides two things: 1) Basic configuration params that are shared
            among all the ads in the page and 2) Takes care of initializing ads
            as soon as the component gets mounted.
    </li>
    <li>
            Lines 23-27: We define a non-refreshable ad. This will not be refreshed
            when calling DFPManager.refresh();. Notice that the prop shouldRefresh
            receives a function that gets evaluated syncrhonously; this function
            is called by DFPManager.refresh() each time this last one is executed,
            the component is only refreshed when this fcn returns true.
    </li>
    <li> Line 30: define a refreshable ad-slot using the &lt;AdSlot&gt; component.</li>
    <li> Lines 8-11: setup an interval loop that refreshes the ads rendered in this page every 15 seconds.</li>
    <li> Lines 15: clear internal loop before unmounting this component. </li>
  </ol>
);

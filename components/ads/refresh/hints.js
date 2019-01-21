import React from 'react';

export default () => (
  <ol>
    <li>
      Line 22: Declare a toplevel&nbsp;
      <strong>&lt;DFPSlotProvider&gt;</strong>
      ,this instance provides two things: 1) Basic configuration params
      that are shared among all the ads in the page and 2) Takes care of
      initializing ads as soon as the component gets mounted.
    </li>
    <li>
      Lines 24-29: We define a non-refreshable ad. This will not be refreshed
      when calling&nbsp;
      <strong>DFPManager.refresh();</strong>
      . Notice that
      the prop shouldRefresh receives a function that gets evaluated
      syncrhonously; this function is called by&nbsp;
      <strong> DFPManager.refresh()</strong>
      &nbsp;each time this last one is executed, the component is only
      refreshed when this fcn returns true.
    </li>
    <li>
      Line 32: define a refreshable ad-slot using the&nbsp;
      <strong>&lt;AdSlot&gt;</strong>
      &nbsp;component.
    </li>
    <li>
      Lines 9-11: setup an interval loop that refreshes the ads rendered in this
      page every 30 seconds.
    </li>
    <li>
      Lines 15: clear internal loop before unmounting this component.
    </li>
  </ol>
);

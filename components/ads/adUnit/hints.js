import React from 'react';

export default () => (
  <ol>
    <li>
            Lines 8: configure a global dfpNetworkId via &lt;DFPSlotProvider&gt;.
            In this line we define the fallback/default adUnit that all ads in
            the page will use (excepting those that define their own adUnit prop).
    </li>
    <li>
            Line 10: we define an ad-slot using the &lt;AdSlot&gt; component, this
            slot picks the default ad-unit "default/unit/1" defined via
            &lt;DFPSlotsProvider&gt;. If your carefully in the google debugger
            this slot's path is "9999/default/unit/1".
    </li>
    <li>
            Line 13: we define a new ad-slot, this time with a custom adUnit:
            "default/unit/2".
    </li>
  </ol>
);

import React from 'react';

export default () => (
    <ol>
        <li> Lines 8: configure a global dfpNetworkId via &lt;DFPSlotProvider&gt;. </li>
        <li>
            Line 10: we define an ad-slot using the &lt;AdSlot&gt; component and
            the custom adunit "homepage/1". As you can check in the dfp debugger
            console, the final path for this slot is "9999/homepage/1"
        </li>
        <li> Line 13: we define a new ad-slot with a different adUnit: "homepage/1". </li>
    </ol>
);

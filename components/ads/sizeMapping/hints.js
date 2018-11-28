import React from 'react';

export default () => (
    <ol>
        <li> Lines 8: setup global config via &lt;DFPSlotProvider&gt;; we define the global adSense attributes foo=bar and test=baz.</li>
        <li> Line 10: we define an ad-slot using the &lt;AdSlot&gt; component. This box picks the global adSense config passed via &lt;DFPSlotProvider&gt; </li>
        <li> Line 13: a second ad slot with custom the adSense attribute site_url=react-dfp.tk.</li>
    </ol>
);

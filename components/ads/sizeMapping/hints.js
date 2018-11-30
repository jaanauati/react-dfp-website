import React from 'react';

export default () => (
    <ol>
        <li> Lines 8-11: setup global config via &lt;DFPSlotProvider&gt;; we define the default sizeMappings for the ads in our: 300x250 when the viewport is between 0x0 and 900x768 and 728x90 and 300x250 when the viewport is between 900x768 and 1024x768.</li>
        <li> Line 14: we define an ad-slot using the &lt;AdSlot&gt; component. This box picks the global adSense config passed via &lt;DFPSlotProvider&gt; </li>
        <li> Line 17-20: a second ad slot with custom sizeMappings (allow ads of 300x250 and 210x60 when viewport is between 0x0 and 900x768, and allow ads of 728x90 and 300x250 when the viewport is between 900x768 and 1024x768).</li>
    </ol>
);

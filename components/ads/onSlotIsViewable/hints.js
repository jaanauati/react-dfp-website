import React from 'react';

export default () => (
    <ol>
        <li> Lines 8-15: configure default / global properties using the &lt;DFPSlotProvider&gt;.</li>
        <li> Line 13: define an ad-slot using the &lt;AdSlot&gt; component, configure a function that prints text to the console when the ad becomes viewable.</li>
        <li> Line 20: define a second ad-slot using the &lt;AdSlot&gt; component; we use the property <bold>onSlotRender</bold> to configure a function that is executed when the ad becomes visible.</li>
    </ol>
);


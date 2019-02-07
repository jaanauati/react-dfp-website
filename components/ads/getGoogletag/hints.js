import React from 'react';

export default () => (
  <ol>
    <li> Lines 18: configure a global dfpNetworkId via &lt;DFPSlotProvider&gt;.</li>
    <li> Line 20,23: we define two ad-slots using the &lt;AdSlot&gt; component.</li>
    <li>
      Lines 7-13: 15 seconds after the page loads, we use the method
      <strong>DPFManager.getGoogletag()</strong> to get the current instance of
      the <strong>googletag</strong> api object, and then we use it to refresh
      the ads in the page.
    </li>
  </ol>
);

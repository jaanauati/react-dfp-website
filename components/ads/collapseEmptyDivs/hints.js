import React from 'react';

export default () => (
  <ol>
    <li>
            Lines 8 configure default / global properties using the
            &lt;DFPSlotProvider&gt;. We set the property
      {' '}
      <bold>collapseEmptyDivs</bold>
            so divs will collapsed when the ads are not rendered.
    </li>
    <li> Line 10 and 13: we define two ad-slots using the &lt;AdSlot&gt; component.</li>
  </ol>
);

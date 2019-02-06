import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 8-10: configure default / global properties using the &lt;DFPSlotProvider&gt;.
      Notice we use the property &apos;targetingArguments&apos; to define the custom
      targeting argument customKw2=&apos;basic example&apos;. This argument is getting
      applied to all the ad slots in the page that do not have a custom definition of
      the prop &apos;targetingArguments&apos;
    </li>
    <li> Line 13: define an ad-slot using the &lt;AdSlot&gt; component.</li>
    <li>
      Line 16-20: define a second ad-slot and use the property &apos;targetingArguments&apos
      to override the targeting arguments configuration. In this case we set the custom
      targeting argument customKw2=&apos;hello&apos;.
    </li>
  </ol>
);

import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 19,22, 25: we define three ad slots using the &lt;AdSlot&gt;
      component.
    </li>
    <li>
      Lines 7-9: manually load ad slots &apos;test1&apos; and
      &apos;test2&apos; 5 seconds after the page loads. Notice that we
      pass this ids when calling <strong> DFPManager.load(...args) </strong>.
    </li>
    <li>
      Lines 10-12: Ten seconds after (that&apos;s fifteen after the page loads),
      we initialize the rest of the available ads in the page,
      in this case only &apos;test3&apos;. Notice that this is the default
      behavior when not passing any arguments to&nbsp;
      <strong> DFPManager.load(...args)</strong>.
    </li>
  </ol>
);

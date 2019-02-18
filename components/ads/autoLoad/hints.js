import React from 'react';

export default () => (
  <ol>
    <li>
            Line 14: Declare a toplevel <strong>&lt;DFPSlotProvider&gt;</strong> element. We set
            the property autoload to false. This means that the ads will no load
            in the page until we explicitly invoke the method
      <bold>DFPManager.load()</bold>
.
    </li>
    <li>
            Lines 18 and 22: we define two ad slots.
    </li>
    <li>
            Line 8: we use the setTimeout javascript function to trigger an
            invokation to
      {' '}
      <bold>DFPManager.load()</bold>
      {' '}
10 seconds after the
            component is mounted.
    </li>
  </ol>
);

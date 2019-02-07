import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 14,29: we define two ad slots using the &lt;AdSlot&gt;
      component.
    </li>
    <li>
      Lines 7-8: we enable divs collapsing, using the method:
      <br />
      <strong>
        {' DFPManager.setCollapseEmptyDivs(true) '}
      </strong>
      , we pass a &apos;true&apos; which means: &apos;collapse divs before
      fetching the ads&apos;.
      <br />
    </li>
  </ol>
);

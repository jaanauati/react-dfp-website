import React from 'react';

export default () => (
  <ol>
    <li>
      Line 9: we read the current set of AdSense attributes using
      &nbsp;{'DFPManager.getAdSenseAttributes()'} and store them
      in the state variable &apos;adSenseAttributes&apos;.
    </li>
    <li>
      Lines 25,28: we define two ad slots using the <strong>&lt;AdSlot&gt;</strong>
      component.
    </li>
    <li>
      Lines 14-18: we configure the adSense attributes site_url for the page
      using the method:
      <br />
      <strong>
        {' DFPManager.setAdSenseAttributes() '}
      </strong>
      , and load the ads in this page using
      <br />
      <strong>
        <a href="/dfpmanager/load/">
          {'DFPManager.load([id])'}
        </a>
      </strong>,
      &nbsp; then we read the current set of AdSense attributes
      using the method: {'DFPManager.getAdSenseAttributes()'} and finally
      update the state variable &apos;adSenseAttributes&apos;.
    </li>
    <li>
      Line 31: we print the vaue of the state variable: &apos;adSenseAttributes&apos;.
    </li>
  </ol>
);

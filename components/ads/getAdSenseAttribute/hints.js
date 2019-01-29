import React from 'react';

export default () => (
  <ol>
    <li>
      Line 9: we read the current value fo the site_url attribute using
      the method &nbsp;{'DFPManager.getAdSenseAttribute()'} and store it
      in the state variable &apos;siteUrl&apos;.
    </li>
    <li>
      Lines 25,28: we define two ad slots using the &lt;AdSlot&gt;
      component.
    </li>
    <li>
      Lines 14-18: we configure the adSense attribute site_url for the page
      using the method:
      <br />
      <strong>
        {' DFPManager.setAdSenseAttributes({...attrs}) '}
      </strong>
      , and load the ads in this page using
      <br />
      <strong>
        <a href="/dfpmanager/load/">
          {'DFPManager.load([id])'}
        </a>
      </strong>,
      &nbsp; then we read the new/current value of the AdSense attribute
      &apos;site_url&apos; that we&apos;ve just set using the method:
      <strong> {'DFPManager.getAdSenseAttribute(name)'} </strong> and finally
      update the state variable &apos;siteUrl&apos;.
    </li>
    <li>
      Line 31: we print the vaue of the state variable: &apos;siteUrl&apos;.
    </li>
  </ol>
);

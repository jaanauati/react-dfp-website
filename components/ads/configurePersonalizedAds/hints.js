import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 15,18: we define two ad slots using the <strong>&lt;AdSlot&gt;</strong>
      component.
    </li>
    <li>
      Lines 7-8: we manually disable any ads personalization usin the method:
      <br />
      <strong>
        {' DFPManager.configurePersonalizedAds(false) '}
      </strong>
      and load the ads in this page using
      <br />
      <strong>
        <a href="/dfpmanager/load/">
          {'DFPManager.load([id])'}
        </a>
      </strong>
    </li>
  </ol>
);

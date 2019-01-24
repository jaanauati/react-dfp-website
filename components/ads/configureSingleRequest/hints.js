import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 15,18: we define two ad slots using the &lt;AdSlot&gt;
      component.
    </li>
    <li>
      Lines 7-8: we manually enable the Single Request Architecture
      using the method:
      <br />
      <strong>
        {' DFPManager.configureSingleRequest() '}
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

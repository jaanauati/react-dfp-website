import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 19, 22 and 25: we declare three ad-slots using the <strong>&lt;AdSlot&gt;</strong>
      &nbsp;component.
    </li>
    <li>
      Lines 7-12: we manually enable the lazy loading feature and configure
      the expected behavior using the method )
      <br />
      <strong>
        {' DFPManager.configureLazyLoad(bool, [config]) '}
      </strong>
      <br />(see documentation above to get
      details about each attribute we pass in the config object,&nbsp;
      then we initialize ads using the method <br />
      <strong>
        <a href="/dfpmanager/load/">
          {'DFPManager.load([id])'}
        </a>
      </strong>
    </li>
  </ol>
);

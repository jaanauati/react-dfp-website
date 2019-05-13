import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>autoReload</strong>
        {' '}
        when the ad slots need to be reloaded as response of updating
        props passed to the
        {' '}
        <strong> &lt;DFPManager&gt;</strong>
        {' '}
        component.
      </p>
      <p>
        This property takes a shape, which is composed of a set of
        keys/props that take boolean values.
        Ads will be reloaded when any of the props configured with a
        &nbsp;<strong>true</strong>&nbsp;is updated.
      </p>
      <ol>
        <li> dfpNetworkId: false. </li>
        <li> personalizedAds: false. </li>
        <li> singleRequest: false. </li>
        <li> adUnit: false. </li>
        <li> sizeMapping: false. </li>
        <li> adSenseAttributes: false. </li>
        <li> targetingArguments: false. </li>
        <li> collapseEmptyDivs: false. </li>
        <li> lazyLoad: false. </li>
      </ol>
      <p>
        Notes:
        <ol>
          <li>
            The described behavior will only work when the property:&nbsp;
            <a href="/dfpmanager/autoload"><strong>autoLoad</strong></a>,
            is enabled.
          </li>
          <li>
            Keep in mind that&nbsp;
            <strong> reloading is not the same than refreshing ads </strong>
            , this is very important, if you want to address any refreshing
            behavior please see the following sections:
            <ul>
              <li>
                <a href="/dfpmanager/refresh/">
                  DFPManager.refresh(...slotId).
                </a>
              </li>
              <li>
                <a href="/adslot/shouldrefresh">
                  &lt;AdSlot shouldRefresh&gt;
                </a>
              </li>
              <li>
                <a href="/examples/refreshing/">
                  Example 1.
                </a>
              </li>
              <li>
                <a href="/examples/refreshing-params/">
                  Example 2.
                </a>
              </li>
            </ul>
          </li>
          <li>
            Under the hood the <storng>&lt;DFPSlotsProvided&gt;</storng>&nbsp;
            calls the method <strong>DFPManager.reload(...)</strong> to reload
            the ads; if you want to learn more details about the reload
            function you can check its documentation:&nbsp;
            <a href="/dfpmanager/reload/">here</a>.
          </li>
        </ol>
      </p>
    </Fragment>
  );
}

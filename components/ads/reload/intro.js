import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the
        {' '}
        <strong>reload(...slotId)</strong>
        {' '}
        method to manually reload arbitrary ad slots in the page.
      </p>
      <p>
        This method can be called not passing any parameter at all, one or
        multiple parameters:
      </p>
      <ul>
        <li> No parameters: All the ads in the page are reloaded.</li>
        <li>
          One or more slotIds: In this case only those ads pointed by the
          provided slotIds are reloaded.
        </li>
      </ul>
      <p>
        <strong> About the reload process:</strong> The ads are reloaded by
        following the steps described below:
      </p>
      <ol>
        <li>
          Destroy ad slots.
        </li>
        <li>
          Initialize ad slots again using the same parameters already
          passed via <strong>&lt;AdSlot&gt;</strong> and <strong>DFPManager</strong>.
        </li>
      </ol>
      <p>
        Note: Keep in mind that&nbsp;
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
      </p>
    </Fragment>
  );
}

import React, { Fragment } from 'react';
import PropLink from '../../propLink';


export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        <strong> DFPManager.refresh([...ids]) </strong>
        to manually refresh ads in your page.
        Arguments:
      </p>
      <ol>
        <li>
          - When no arguments are passed the function will refresh all the
          ad slots, excepting those that implement the property&nbsp;
          <PropLink name="shouldRefresh" href="/adSlot/shouldRefresh" />
          &nbsp;returning false.
         </li>
        <li>
          - Pass any arbitrary number of adSlot ids (strings) to refresh
          only that set of ads. In this case the function ignores the
          property&nbsp;
          <PropLink name="shouldRefresh" href="/adSlot/shouldRefresh" />
          .
        </li>
      </ol>
      <p>
        Examples:
      </p>
      <ol>
        <li>
          Example 1:&nbsp;
          <a href="/examples/refreshing">Link</a>
          . Select what ads to refresh using&nbsp;
          <PropLink name="shouldRefresh" href="/adSlot/shouldRefresh" />
          &nbsp;prop.
        </li>
        <li>
          Example 2:&nbsp;
          <a href="/examples/refreshing-params">Link</a>
          . Pass params to&nbsp;
          <strong>DFPManager.refresh()</strong>
          &nbsp;so to refreh arbitrary ad slots.
        </li>
      </ol>
    </Fragment>
  );
}

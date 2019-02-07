import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>setCollapseEmptyDivs([boolean])</strong>
        {' '}
        to nables collapsing of slot divs when there is no ad content to
        display.
      </p>
      <p>
        The method accepts one parameter that expects the following values:
      </p>
      <ol>
        <li>
          <strong> false </strong>
          : collapse slots after ads are fetched.
        </li>
        <li>
          <strong> true </strong>
          : collapse divs before ads are fetched.
        </li>
        <li>
          <strong> null/undefined </strong>
          : do not collapse divs.
        </li>
      </ol>
      <p>
        <strong>
          Important note:
          {' '}
        </strong>
        although this method will be always available
        and is meant for
        {' \'public usage\''}
        ,
        <br />
        <strong>
          <a href="/dfpslotsprovider/collapseemptydivs/">
            {'<DFPSlotProvider collapseEmptyDivs />'}
          </a>
        </strong>
        &nbsp;is the recomended way to approach this behavior, please
        use that one one if possible.
      </p>
    </Fragment>
  );
}

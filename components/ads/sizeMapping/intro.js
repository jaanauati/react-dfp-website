
import React, { Fragment } from 'react';

export default function (props) {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>sizeMapping</strong>
        {' '}
        to define a set of
        alternative sizes that are applied to each adSlot according the
        browser viewport size. This prop is specially useful when building
        responsive ads.
      </p>
      <p>
        As demonstrated in the following example, both components
        support this feature:
      </p>
      <ol>
        <li> DFPSlotsProvider </li>
        <li> AdSlot </li>
      </ol>
      <p>
        You can find more details about the sizemappings in official
        gpt documentation:
        &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/reference#googletag.Slot_defineSizeMapping"
        >
          link
        </a>
        &nbsp;and&nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://support.google.com/admanager/answer/3423562?visit_id=636797924832865536-2410019847&rd=2"
        >
          link
        </a>
        ;
      </p>
    </Fragment>
  );
}

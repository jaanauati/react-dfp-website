
import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>onSlotVisibilityChanged</strong>
        {' '}
        to pass a custom callback that will be fired whenever the on-screen
        percentage of the AdSlot area changes.
      </p>
      <p>
        When executing your callback, react-dfp will pass also an object
        with the following format:
        {' '}
        <strong>
          {'{'}
          {' '}
          slotId, event
          {' '}
          {'}'}
        </strong>
        :
      </p>
      <ol>
        <li>
          {' '}
          <strong>slotId</strong>
          : id of the current ad slot.
          {' '}
        </li>
        <li>
          {' '}
          <strong>event</strong>
          : gpt event data (see docs in links listed below).
        </li>
      </ol>
      <p>
        You can find more information about the event
        "SlotVisibilityChangedEvent" in the official gpt documentation:
        &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/reference#googletageventsslotvisibilitychangedevent"
        >
          link
        </a>
          &nbsp;and&nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/reference#googletag.Service"
        >
          link
        </a>
        .
      </p>
    </Fragment>
  );
}

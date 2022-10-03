
import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the property
        {' '}
        <strong>onSlotIsViewable</strong>
        {' '}
        to define a
        custom callback function that will be fired when the ad
        impression becomes viewble.
      </p>
      <p>
        When executing your callback function, react-dfp passes an
        argument, which is just a plain js object with the following
        format:
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
        "ImpressionViewableEvent" in the official gpt documentation:
        &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/reference#googletageventsimpressionviewableevent"
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

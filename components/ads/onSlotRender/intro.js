import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        The property
        {' '}
        <strong>onSlotRender</strong>
        {' '}
        allows your app to
        execute custom js-code when creative code is inserted into a
        given ad slot.
      </p>
      <p>
        As opposed to many of the other AdSlot props, this property is
        only supported by this component. The prop accepts a callback
        function that will be called when the event
        &apos;SlotRenderEndedEvent&apos; is fired.
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
        &apos;SlotRenderEndedEvent&apos; in the official gpt documentation:
        &nbsp;
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://developers.google.com/doubleclick-gpt/reference#googletageventsslotrenderendedevent"
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

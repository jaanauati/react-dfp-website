import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the
        {' '}
        <strong>load(...slotId)</strong>
        {' '}
        method to manually
        initialize the ads in your page. The behavior of this method
        is the following:
      </p>
      <ol>
        <li>
          Pull and load the google gpt javascripts (in case that
          this has not been done yet).
        </li>
        <li>
          When not passing any arguments this method will initialize
          all the ads in the page.
        </li>
        <li>
          You can also pass any arbitrary number of slot Ids (strings),
          in that case this method will only initialize the pointed slots.
        </li>
      </ol>
    </Fragment>
  );
}

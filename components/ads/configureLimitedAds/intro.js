import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <p>
        Use the method
        {' '}
        <strong>configureLimitedAds(enable)</strong>
        {' '}
        to use limited ads in your pages.
      </p>
      <p> This function takes the following parameter: </p>
      <ol>
        <li> enable: a boolean that tells whether to enable or not the limited ads behavior. </li>
      </ol>
    </Fragment>
  );
}

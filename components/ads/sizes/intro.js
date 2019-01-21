import React, { Fragment } from 'react';

export default function (props) {
  return (
    <Fragment>
      <p>
        Use the
        {' '}
        <strong>sizes</strong>
        {' '}
        prop to configure an array of
        sizes that a given adSlot must support. As demostrated in the
        following example, each size is defined with a list following
        this format: [width, height]. This property also supports
        named sizes (example "fluid").
      </p>
    </Fragment>
  );
}

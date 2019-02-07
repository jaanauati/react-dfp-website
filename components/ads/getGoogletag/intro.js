import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
        Use the method <strong>DFPManager.getGoogletag()</strong> to get the
        current instance of the gpt api interface object (googletag).
      </p>
      <p>
        This method returns a promise that resolves when the googletag instance
        is ready for usage.
      </p>
      <p>
        Having access to the googlegpt api might be useful in some edge cases,
        or when you want to make use new options that are still not supported
        by <strong> react-dfp </strong>.
      </p>
    </Fragment>
  );
}

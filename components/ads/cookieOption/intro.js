import React, { Fragment } from "react";

const EXTERNAL_LINK =
  "https://developers.google.com/doubleclick-gpt/reference#googletag.pubadsservice-setcookieoptionsoptions";
export default function() {
  return (
    <Fragment>
      <p>
        Use the prop
        <strong>cookieOption</strong>
        for ignoring Google Ad Manager cookies on the current page.
      </p>
      <ol>
        <li> - When true (default): use cookies.</li>
        <li> - When false: Ignore cookies. </li>
      </ol>
      <p>
        Refer to the gpt documentation for more details:
        <a rel="noopener noreferrer" target="_blank" href={EXTERNAL_LINK}>
          link
        </a>
        .
      </p>
    </Fragment>
  );
}

import React, { Fragment } from 'react';
import Link from 'next/link';

export default function (props) {
  return (
    <Fragment>
      <p>
                Using react-dfp to serve google dfp ads should be
                pretty straightforward in most the cases. The library is
                composed of two main react components and a javascript library:
      </p>
      <ol>
        <li> DFPSlotsProvider </li>
        <li> AdSlot </li>
        <li> DFPManager </li>
      </ol>
      <p>
                You will find that these two components are really easy to show.
                Below, there is an example of how to build and serve ads in your
                site using them.
      </p>
      <p>
                Just keep in mind the following two concepts:
      </p>
      <p>
        <bold>- DFPSlotsProvider</bold>
: this component is only meant
                to configure global options, it follows the context provider
                pattern (
        {<Link href="https://reactjs.org/docs/context.html"><a> see this link for details </a></Link>}
),
                you should only declare and mount one instance of this component
                per page (tipically as higher as possible on the tree so all the
                nodes can access the context variables.)
      </p>
      <p>
        <bold>- AdSlot</bold>
: this component is meant to define ad
                slots in your application.
      </p>
      <p>
        <bold>- DFPManager</bold>
: this library makes an abstraction of
                the gpt library and also takes care of pulling the gpt
                javascripts when needed.  Its API is designed to support both:
                react-dfp/AdSlot/DFPSlotProvider components and also any custom
                call/invocation that your application may do (for instance,
                see the
        <Link href="/examples/refreshing"><a> refreshable ads example </a></Link>
).
                Of course, for most of the cases the two components listed above
                will suffice and, likely, you will not have to deal with this
                library at all.
      </p>
    </Fragment>
  );
}

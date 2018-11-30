import { Fragment } from 'react';
import Link from 'next/link';

export default function(props) {
    return (
        <Fragment>
            <p>
                You can use this property to collapse container divs when their
                ads are not filled.
            </p>
            <p>
                This property is disabled by default, means that the ads are
                not getting collapsed unless you explicitly pass it.
            </p>
            <p> For more information refere to the gpt official documentation:
                &nbsp;<Link href="https://support.google.com/admanager/answer/3072674?hl=en"><a target="_blank">link</a></Link>.
            </p>
        </Fragment>
    );
}

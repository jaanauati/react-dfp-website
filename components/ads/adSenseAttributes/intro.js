import { Fragment } from 'react';
import Link from 'next/link';

export default function(props) {
    return (
        <Fragment>
            <p>
                The <strong>adSenseAttributes</strong> property is meant to
                configure a set of extra adSense keywords for your ads.
                This property is accepted by both components:
            </p>
            <ol>
                <li> DFPSlotsProvider </li>
                <li> AdSlot </li>
            </ol>
            <p>
                You can find more information about this topic in the official
                gpt documentation:
                &nbsp;
                <a
                    target="_blank"
                    href="https://developers.google.com/doubleclick-gpt/adsense_attributes"
                >
                    link
                </a>.
            </p>
        </Fragment>
    );
}

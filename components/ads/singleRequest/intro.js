import { Fragment } from 'react';
import Link from 'next/link';

export default function(props) {
    return (
        <Fragment>
            <p>
                Use the <strong>singleRequest</strong> property to define the
                strategy to fire the network/ad requests:
            </p>
            <ol>
                <li> - When true (default): the Single request architecture (SRA) is enabled. </li>
                <li> - When false: the Multi request strategy is used.</li>
            </ol>
            <p>
                Refer to the gpt documentation for more details:
                &nbsp;<a target="_blank" src="https://support.google.com/admanager/answer/183282?hl=en">link</a>.
            </p>
        </Fragment>
    );
}

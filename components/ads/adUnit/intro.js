import { Fragment } from 'react';
import Link from 'next/link';

export default function(props) {
    return (
        <Fragment>
            <p>
                Use the <strong>adUnit</strong> property to configure all the
                valid adUnitPaths in your ad slots.
                This property is accepted by both:
            </p>
            <ol>
                <li> the DFPSlotsProvider component </li>
                <li> or the AdSlot component </li>
            </ol>
            <p>
                In this prop you should pass a string, that later, when ads are
                rendered, will be used in combination to your network id (see
                <Link
                  as="/adslot/dfpnetworkid"
                  href="/example?example=dfpNetworkId&title=dfpNetworkId"
                >
                  <a> dfpNetworkId prop</a>
                </Link>) to generate the final adUnitPaths for your slots.
            </p>
        </Fragment>
    );
}

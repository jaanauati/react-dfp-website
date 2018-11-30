import react, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
    render() {
        return (
            <DFPSlotsProvider
                dfpNetworkId='9999'
                sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90], [300, 250]]},
                                {viewport: [900, 768], sizes:[[300, 250]] }] }
            >
                <div className="desktop-ads">
                    <AdSlot adUnit='homepage/1' sizes={[ [728,90], [300, 250] ]} />
                </div>
                <div className="mobile-ads">
                    <AdSlot
                        adUnit='homepage/2'
                        sizes={[ [728,90], [300, 250], [210, 60] ]}
                        sizeMapping={ [ {viewport: [1024, 768], sizes:[[728, 90], [300, 250]]},
                                        {viewport: [900, 768], sizes:[[300, 250], [210,60]] }] }
                    />
                </div>
            </DFPSlotsProvider>
        );
    }
}

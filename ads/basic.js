import react, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class MyBodyPageComponent extends Component {
    render() {
        return (
            <DFPSlotsProvider
                dfpNetworkId='9999'
                targetingArguments={ {'customKw': 'basic example'} }
                sizeMapping={[
                    {viewport: [1024, 768], sizes:[[728, 90], [300, 250]]},
                    {viewport: [900, 768], sizes:[[300, 250]] }
                ]}
            >
                <div className="desktop-ads">
                    <AdSlot sizes={[[728,90], [300, 250]]} adUnit='homepage/1' />
                </div>
                <div className="mobile-ads">
                    <AdSlot sizes={[[320,50], [300, 50]]} adUnit='homepage/mobile' />
                </div>
            </DFPSlotsProvider>
        );
    }
}

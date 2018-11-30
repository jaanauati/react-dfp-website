import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { AdSlot, DFPManager, DFPSlotsProvider } from 'react-dfp';

export default class RefreshableAds extends Component {

    componentDidMount() {
        setTimeout(() => DFPManager.load(), 10000);
    }

    render() {
        return (
            <div>
                <DFPSlotsProvider dfpNetworkId='9999' adUnit="adunit" autoLoad={false}>
                    <div>
                        <div> Main ad Slot </div>
                        <div>
                            <AdSlot sizes={[[728,90], [300, 250]]} />
                        </div>
                        <div> Secondary Ad:</div>
                        <AdSlot sizes={[[300, 250]]} />
                    </div>
                </DFPSlotsProvider>
            </div>
        );
    }
}

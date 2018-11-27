import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { AdSlot, DFPManager, DFPSlotsProvider } from 'react-dfp';

export default class RefreshableAds extends Component {

    componentDidMount() {
        this.interval = window.setInterval(
            () => { DFPManager.refresh(); },
            15000,
        );
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <DFPSlotsProvider dfpNetworkId='9999'>
                    <div>
                        <AdSlot
                            sizes={[[728,90], [300, 250]]}
                            adUnit='test/non-refreshable'
                            shouldRefresh={ () => false }
                        />
                    </div>
                    <div> </div>
                    <AdSlot sizes={[[300, 250]]} adUnit='test/refreshable' />
                </DFPSlotsProvider>
            </div>
        );
    }
}
DFPManager.load();

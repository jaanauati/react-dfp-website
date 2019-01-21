import React, { Component } from 'react';
import { AdSlot, DFPManager, DFPSlotsProvider } from 'react-dfp';

export default class RefreshableAds extends Component {
  componentDidMount() {
    this.interval = window.setInterval(
      () => { DFPManager.refresh('refreshable', 'refreshable-2'); },
      30000,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <DFPSlotsProvider dfpNetworkId="9999">
          <div>
            <AdSlot
              slotId="refreshable"
              sizes={[[728, 90], [300, 250]]}
              adUnit="test/refreshable"
            />
          </div>
          <div />
          <AdSlot slotId="refreshable-2" sizes={[[300, 250]]} adUnit="test/two" />
          <AdSlot sizes={[[300, 250]]} adUnit="test/three" />
        </DFPSlotsProvider>
      </div>
    );
  }
}

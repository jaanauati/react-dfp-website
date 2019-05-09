import React, { Component } from 'react';
import { AdSlot, DFPManager, DFPSlotsProvider } from 'react-dfp';


export default class Example extends Component {

  componentDidMount() {
    setTimeout(() => {
      DFPManager.reload('test1', 'test2');
    }, 5000);
  }

  render() {
    return (
      <DFPSlotsProvider dfpNetworkId="9999">
        <div className="desktop-ads">
          <AdSlot slotId="test1" sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
        </div>
        <div className="mobile-ads">
          <AdSlot slotId="test2" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
        </div>
        <div className="mobile-ads">
          <AdSlot slotId="test3" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile/two" />
        </div>
      </DFPSlotsProvider>
    );
  }
}

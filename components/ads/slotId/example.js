import React from 'react';
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    return (
      <DFPSlotsProvider
        dfpNetworkId="9999"
        targetingArguments={{ customKw: 'basic example' }}
        sizeMapping={[
          { viewport: [1024, 768], sizes: [[728, 90], [300, 250]] },
          { viewport: [900, 768], sizes: [[300, 250]] },
        ]}
      >
        <div className="primary-ads">
          <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
        </div>
        <div className="secondary-ads">
          <AdSlot slotId="test-id" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
        </div>
      </DFPSlotsProvider>
    );
  }
}

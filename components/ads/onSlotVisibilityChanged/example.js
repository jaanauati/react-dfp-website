import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    return (
      <DFPSlotsProvider dfpNetworkId="9999">
        <div className="desktop-ads">
          <AdSlot
            sizes={[[728, 90], [300, 250]]}
            adUnit="homepage/1"
            onSlotVisibilityChanged={dfpEventData => console.log('Slot 1: visibility changed.', dfpEventData)}
          />
        </div>
        <div className="mobile-ads">
          <AdSlot
            sizes={[[320, 50], [300, 50]]}
            adUnit="homepage/mobile"
            onSlotVisibilityChanged={dfpEventData => console.log('Slot 2: visibility changed.', dfpEventData)}
          />
        </div>
      </DFPSlotsProvider>
    );
  }
}

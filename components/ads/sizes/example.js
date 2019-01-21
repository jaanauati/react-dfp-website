import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    return (
      <DFPSlotsProvider dfpNetworkId="9999">
        <div className="desktop-ads">
          <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
        </div>
        <div className="mobile-ads">
          <AdSlot dfpNetworkId="1999" sizes={[[300, 250], [300, 600], 'fluid']} adUnit="homepage/mobile" />
        </div>
      </DFPSlotsProvider>
    );
  }
}

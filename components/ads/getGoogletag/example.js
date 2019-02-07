import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot, DFPManager } from 'react-dfp';


export default class Example extends Component {
  componentDidMount() {
    window.setTimeout(() => {
      DFPManager.getGoogletag().then((googletag) => {
        googletag.cmd.push(() => {
          googletag.pubads().refresh();
        });
      });
    }, 15000);
  }

  render() {
    return (
      <DFPSlotsProvider dfpNetworkId="9999">
        <div className="desktop-ads">
          <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
        </div>
        <div className="mobile-ads">
          <AdSlot dfpNetworkId="1999" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
        </div>
      </DFPSlotsProvider>
    );
  }
}

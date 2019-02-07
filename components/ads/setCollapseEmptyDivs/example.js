import React, { Component } from 'react';
import { AdSlot, DFPManager } from 'react-dfp';


export default class Example extends Component {
  componentDidMount() {
    DFPManager.setCollapseEmptyDivs(true);
    DFPManager.load();
  }

  render() {
    return (
      <div>
        <div className="desktop-ads">
          <AdSlot
            dfpNetworkId="9999"
            adUnit="homepage/1"
            slotId="test1"
            sizes={[[728, 90], [300, 250]]}
          />
        </div>
        <div className="mobile-ads">
          <AdSlot
            dfpNetworkId="9999"
            adUnit="homepage/mobile"
            slotId="test2"
            sizes={[[320, 50], [300, 50]]}
          />
        </div>
      </div>
    );
  }
}

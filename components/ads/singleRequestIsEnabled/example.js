import React, { Component } from 'react';
import { AdSlot, DFPManager } from 'react-dfp';


export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleRequestEnabled: DFPManager.singleRequestIsEnabled(),
    };
  }

  componentDidMount() {
    DFPManager.configureSingleRequest(true);
    DFPManager.load();
    this.setState({
      singleRequestEnabled: DFPManager.singleRequestIsEnabled(),
    });
  }

  render() {
    return (
      <div>
        <div className="desktop-ads">
          <AdSlot slotId="test1" dfpNetworkId="9999" sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
        </div>
        <div className="mobile-ads">
          <AdSlot slotId="test2" dfpNetworkId="9999" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
        </div>
        <div>
          Single Request Architecture: {this.state.singleRequestEnabled ? 'enabled' : 'disabled'}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { AdSlot, DFPManager } from 'react-dfp';


export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteUrl: DFPManager.getAdSenseAttribute('site_url'),
    };
  }

  componentDidMount() {
    DFPManager.setAdSenseAttributes({ site_url: 'foo.bar.baz' });
    DFPManager.load();
    this.setState({
      siteUrl: DFPManager.getAdSenseAttribute('site_url'),
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
          SiteUrl: {this.state.siteUrl}
        </div>
      </div>
    );
  }
}

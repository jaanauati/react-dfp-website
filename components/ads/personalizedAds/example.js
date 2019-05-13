import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { personalizedAds: false };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ personalizedAds: true })}, 3000);
  }

  render() {
    return (
      <DFPSlotsProvider personalizedAds={this.state.personalizedAds} dfpNetworkId="4585">
        <div className="desktop-ads">
          <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="speedtest.net/stnext_leaderboard" />
        </div>
        <div className="mobile-ads">
          <AdSlot sizes={[[320, 50], [300, 50]]} adUnit="speedtest.net/stnext_top_rectangle" />
        </div>
      </DFPSlotsProvider>
    );
  }
}

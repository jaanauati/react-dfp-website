import React, { Component } from 'react';
import { AdSlot, DFPManager } from 'react-dfp';


export default class Example extends Component {
  componentDidMount() {
    DFPManager.configureLimitedAds(true);
    DFPManager.load();
  }

  render() {
    return (
      <div>
        <div className="desktop-ads">
          <AdSlot sizes={[[728, 90]]} adUnit="sports" />
        </div>
        <div style={{ height: '300vh' }} />
        <AdSlot sizes={['fluid']} adUnit="news" />
        <div style={{ height: '900vh' }} />
        <div className="mobile-ads">
          <AdSlot sizes={[[160, 600]]} adUnit="weather" />
        </div>
      </div>
    );
  }
}

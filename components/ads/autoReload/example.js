import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { lazyLoad: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      lazyLoad: {
        fetchMarginPercent: 500,
        renderMarginPercent: 200,
        mobileScaling: 2.0,
      },
    }), 3000);
  }

  render() {
    return (
      <DFPSlotsProvider
        lazyLoad={this.state.lazyLoad}
        autoReload={{ lazyLoad: true }}
        singleRequest={false}
        dfpNetworkId="9999"
      >
        <div className="desktop-ads">
          <AdSlot sizes={[[728, 90]]} adUnit="sports" />
        </div>
        <AdSlot sizes={['fluid']} adUnit="news" />
      </DFPSlotsProvider>
    );
  }
}

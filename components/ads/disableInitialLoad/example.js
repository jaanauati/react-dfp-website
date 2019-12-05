import React, { useEffect } from 'react';
import { DFPSlotsProvider, AdSlot, DFPManager } from 'react-dfp';


export default () => {
  useEffect(
    () => {
      setTimeout(() => DFPManager.refresh(), 3000);
    },
    [],
  );
  return (
    <DFPSlotsProvider dfpNetworkId="9999" disableInitialLoad>
      <div className="desktop-ads">
        <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
      </div>
      <div className="mobile-ads">
        <AdSlot sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
      </div>
    </DFPSlotsProvider>
  );
};

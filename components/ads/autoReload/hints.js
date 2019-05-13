import React from 'react';

export default () => (
  <ol>
    <li>
      Lines 7: we configure the default value for the property
      <strong>lazyLoad</strong>.
    </li>
    <li>
      Lines 29, 31: we declare two ad-slots using the <strong>&lt;AdSlot&gt;</strong>
      &nbsp;component.
    </li>
    <li>
      Lines 22, 27: Configure the global dfp parameter using the&nbsp;
      <strong>&lt;DFPSlotsProvider&gt;</strong>
      &nbsp;component. We use the property
      <strong>autoReload</strong>
      &nbsp;to tell to react-dfp that the ads must be reloaded when the value
      passed for the property <storng>lazyLoad</storng> changes. Also notice
      that the initial value for the property <strong>lazyLoad</strong> is
      false (we use the component state for this).
    </li>
    <li>
      Lines 11, 19: we configure a timer to trigger 3 seconds after the ads
      loaded that updates the value passed to prop <strong>lazyLoad</strong>.
      Given our current setup all the ads will be reloaded (destroyed and
      created again) when the <strong> &lt;DFPSlotsProvider&gt;</strong>
      &nbsp;component is rendered again.
    </li>
  </ol>
);

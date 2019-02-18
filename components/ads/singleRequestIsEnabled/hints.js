import React from 'react';

export default () => (
  <ol>
    <li>
      Line 9: we read the singleRequest configuration using the method
      &nbsp;{'DFPManager.singleRequestIsEnabled()'} and store its value
      in the state variable &apos;singleRequestEnabled&apos;.
    </li>
    <li>
      Lines 25,28: we define two ad slots using the <strong>&lt;AdSlot&gt;</strong>
      component.
    </li>
    <li>
      Lines 14-18: we manually enable the Single Request Architecture
      using the method:
      <br />
      <strong>
        {' DFPManager.configureSingleRequest() '}
      </strong>
      , and load the ads in this page using
      <br />
      <strong>
        <a href="/dfpmanager/load/">
          {'DFPManager.load([id])'}
        </a>
      </strong>,
      &nbsp; then we read the value of singleRequest configuration
      using the method: {'DFPManager.singleRequestIsEnabled()'} and finally
      update the state variable &apos;singleRequestEnabled&apos;.
    </li>
    <li>
      Line 31: we print the vaue of the state variable.
    </li>
  </ol>
);

import React from 'react';

const { buildUrls } = require('../utils/routes');

function getListItems(section) {
  const urls = buildUrls(section);
  return Object
    .keys(urls)
    .map(key => (
      <li key={`${section}-${key}`} className={`sidebar-item ${key}`}>
        {
          urls[key].query.disabled ? (
            <span>
              {urls[key].query.sidebarTitle}
            </span>
          ) : (
            <a
              href={key}
            >
              {urls[key].query.sidebarTitle}
            </a>
          )
        }
      </li>
    ));
}

export default function sideBar() {
  return (
    <div id="sidebar">
      <h3> Gneral </h3>
      <ol>
        <li><a href="/">Usage</a></li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/jaanauati/react-dfp/master/LICENSE">License</a>
        </li>
      </ol>
      <h3> Examples </h3>
      <ol>
        { getListItems('Examples') }
        {' '}
      </ol>
      <h3> AdSlot </h3>
      <ol>
        { getListItems('AdSlot') }
        {' '}
      </ol>
      <h3> DFPSlotsProvider </h3>
      <ol>
        { getListItems('DFPSlotsProvider') }
        {' '}
      </ol>
      <h3> DFPManager </h3>
      <ol>
        { getListItems('DFPManager') }
        {' '}
      </ol>
    </div>
  );
}

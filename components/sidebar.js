import React from 'react';
import Sidebar from "react-sidebar";

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

function SidebarContent() {
  return (
    <div className="sidebar">
      <h3> General </h3>
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

export default class SiteSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebarMobile">
          <Sidebar
            sidebar={<SidebarContent />}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: 'white' } }}
          >
            <a role="button" onClick={() => this.onSetSidebarOpen(true)}>
              <i className="fa fa-bars" />
            </a>
          </Sidebar>
        </div>
        <div id="sidebar">
          <SidebarContent />
        </div>
      </React.Fragment>
    );
  }
}
import Link from 'next/link';

const { ADSLOT_API, DFP_SLOTS_PROVIDER, DFP_MANAGER } = require('../api.json');

const { buildUrls, MAIN_ENDPOINT } = require('../utils/routes');

function getListItems(section) {
    const urls = buildUrls(section);
    return Object
        .keys(urls)
        .map(key => (
            <li key={`${section}-${key}`} className={`sidebar-item ${key}`}>
                <a
                    href={key}
                >
                    {urls[key].title}
                </a>
            </li>
        ));
}

export default function sideBar(props) {
    return (
        <div id="sidebar">
            <h3> Examples </h3>
            <ol>{ getListItems('Examples') } </ol>
            <h3> AdSlot </h3>
            <ol>{ getListItems('AdSlot') } </ol>
            <h3> DFPSlotsProvider </h3>
            <ol>{ getListItems('DFPSlotsProvider') } </ol>
            <h3> DFPManager </h3>
            <ol>{ getListItems('DFPManager') } </ol>
        </div>
    );
}

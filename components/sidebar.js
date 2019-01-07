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
                    href={`/${section.toLowerCase()}/${encodeURIComponent(urls[key].example).toLowerCase()}/`}
                >
                    {urls[key].title}
                </a>
            </li>
        ));
}

export default function sideBar(props) {
    return (
        <div id="sidebar">
            <h3> Basic Examples </h3>
            <ol>
                <li>
                    <Link
                        as="/examples/basic/"
                        href={`${MAIN_ENDPOINT}?title=${encodeURIComponent('Basic Example')}&example=basic`}
                    >
                        <a>Basic Example</a>
                    </Link>
                </li>
                <li>
                    <Link
                        as="/examples/refreshable/"
                        href={`${MAIN_ENDPOINT}?title=${encodeURIComponent('Refreshable ads')}&example=refreshable`}
                    >
                        <a>Refreshing Ads</a>
                    </Link>
                </li>
            </ol>
            <h3> AdSlot </h3>
            <ol>{ getListItems('AdSlot') } </ol>
            <h3> DFPSlotsProvider </h3>
            <ol>{ getListItems('DFPSlotsProvider') } </ol>
            <h3> DFPManager </h3>
            <ol>{ getListItems('DFPManager') } </ol>
        </div>
    );
}

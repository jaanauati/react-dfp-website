import Link from 'next/link';

const { ADSLOT_API, DFP_SLOTS_PROVIDER } = require('../api.json');

function getListItems(listEntries, section) {
    return Object
        .keys(listEntries)
        .map(key => (
            <li className={`sidebar-item ${key}`}>
                <Link href={`/${section.toLowerCase()}/${key.toLowerCase()}`}><a>{key}</a></Link>
            </li>
        ));
}

export default function sideBar(props) {
    return (
        <div className="sidebar">
            <h3> Basic Examples </h3>
            <ol>
                <li> <Link href="/examples/basic"><a>Basic Example</a></Link> </li>
                <li> <Link href="/examples/refreshable"><a>Refreshing Ads</a></Link> </li>
            </ol>
            <h3> AdSlot </h3>
            <ol>{ getListItems(ADSLOT_API, 'AdSlot') } </ol>
            <h3> DFPSlotsProvider </h3>
            <ol>{ getListItems(DFP_SLOTS_PROVIDER, 'DFPSlotsProvider') } </ol>
            <h3> DFPManager </h3>
            <ol>{ getListItems(ADSLOT_API, 'DFPManager') } </ol>
        </div>
    );
}

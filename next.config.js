const { ADSLOT_API, DFP_SLOTS_PROVIDER } = require('./api.json');

const MAIN_ENDPOINT = '/example';
function parseUrls(CONFIG_ENTRY, section) {
    return Object.keys(CONFIG_ENTRY)
        .reduce(
            (final, key) => ({
                ...final, [`/${section.toLowerCase()}/${key.toLowerCase()}`]: { page: MAIN_ENDPOINT, query: {title: `${section}.${key}`, example: key}}
            }),
            {});

}
module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const pages = {
      '/': { page: '/' },
      '/examples/basic': { page: MAIN_ENDPOINT, query: { title: 'Basic Example', example: 'basic' } },
      '/examples/refreshable': { page: MAIN_ENDPOINT, query: { title: 'Refreshable ads', example: 'refreshable' } },
      ...parseUrls(ADSLOT_API, 'AdSlot'),
      ...parseUrls(DFP_SLOTS_PROVIDER, 'DFPSlotsProvider'),
    };
    return pages;
  }
}

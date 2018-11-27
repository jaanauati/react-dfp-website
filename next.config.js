const { ADSLOT_API, DFP_SLOTS_PROVIDER } = require('./api.json');

function parseUrls(CONFIG_ENTRY, section) {
    return Object.keys(CONFIG_ENTRY)
        .reduce(
            (final, key) => ({
                ...final, [`/${section.toLowerCase()}/${key.toLowerCase()}`]: { page: '/basic', query: {title: `${section}.${key}`, example: key}}
            }),
            {});

}
module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const pages = {
      '/': { page: '/basic' },
      '/examples/basic': { page: '/basic', query: { title: 'Basic Example', example: 'basic' } },
      '/examples/refreshable': { page: '/basic', query: { title: 'Refreshable ads', example: 'refreshable' } },
      ...parseUrls(ADSLOT_API, 'AdSlot'),
      ...parseUrls(DFP_SLOTS_PROVIDER, 'DFPSlotsProvider'),
    };
    return pages;
  }
}

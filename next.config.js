const { buildUrls } = require('./utils/routes');

async function exportPathMap(defaultPathMap) {
  const pages = {
    '/': { page: '/index' },
    '/404': { page: '/404' },
    ...buildUrls('Examples'),
    ...buildUrls('AdSlot'),
    ...buildUrls('DFPSlotsProvider'),
    ...buildUrls('DFPManager'),
  };
  return pages;
}
exports.exportPathMap = exportPathMap;

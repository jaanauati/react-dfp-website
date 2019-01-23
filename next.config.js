const { buildUrls } = require('./utils/routes');

async function exportPathMap(defaultPathMap) {
  const pages = {
    '/': { page: '/index' },
    ...buildUrls('Examples'),
    ...buildUrls('AdSlot'),
    ...buildUrls('DFPSlotsProvider'),
    ...buildUrls('DFPManager'),
  };
  return pages;
}
exports.exportPathMap = exportPathMap;

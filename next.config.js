/* eslint-disable global-require */
const { buildUrls } = require('./utils/routes');

async function exportPathMap() {
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

module.exports = {
  exportPathMap,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          // eslint-disable-next-line import/no-extraneous-dependencies
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'global',
          },
        },
      ],
    });
    return config;
  },
};

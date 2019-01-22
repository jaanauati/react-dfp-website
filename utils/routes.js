const apiEntries = require('../api.json');

exports.buildUrls = (section) => {
  const listEntries = apiEntries[section];
  return Object
    .keys(listEntries)
    .reduce(
      (reduced, key) => Object.assign(
        reduced,
        {
          [
          listEntries[key].href
                || `/${section.toLowerCase()}/${key.toLowerCase()}/`
          ]: {
            page: exports.MAIN_ENDPOINT,
            query: {
              example: key, title: key, sidebarTitle: key, ...listEntries[key],
            },
          },
        },
      ), {},
    );
};

exports.MAIN_ENDPOINT = '/example';

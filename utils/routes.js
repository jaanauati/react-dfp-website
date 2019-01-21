const apiEntries = require('../api.json');

exports.buildUrls = function (section) {
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
            example: key, title: key, sidebarTitle: key, ...listEntries[key],
          },
        },
      ), {},
    );
};

exports.MAIN_ENDPOINT = '/example';

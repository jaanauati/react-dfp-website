const apiEntries = require('../api.json');

exports.buildUrls = function(section) {
  const listEntries = apiEntries[section];
  return Object
    .keys(listEntries)
    .reduce(
      (reduced, key) => Object.assign(
        reduced,
        {
          [`/${section.toLowerCase()}/${key.toLowerCase()}/`]: { example: key, title: key },
        }
      ), {}
    );
}

exports.MAIN_ENDPOINT = '/example';


'use strict';

export default (context, callback) => {
  callback(null, { name:'webtask-boilerpate', context });
}

module.exports = exports.default;

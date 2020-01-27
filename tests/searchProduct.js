const utils = require('../page-objects/utils.js');

module.exports = {
  "@tags": ["Search"],
  before: function (browser) {
    utils(browser).openBrowser();
  },

  "Search for a product": function (browser) {
    utils(browser).searchProduct();
  },

  after: function (browser) {
    utils(browser).closeBrowser();
  },
};
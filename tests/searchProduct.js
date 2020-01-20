var utils = require('../page-objects/utils.js');

module.exports = {
  '@tags': ['Search'],
    before: function (browser) {
      utils(browser).openBrowser();
    },

    'Search for a product': function(browser) {
      utils(browser).searchProduct();
      browser.pause(2000);
    },

    after: function (browser) {
      utils(browser).closeBrowser();
    },
};
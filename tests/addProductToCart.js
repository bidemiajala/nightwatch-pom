var utils = require('../page-objects/utils.js');

module.exports = {
  '@tags': ['Cart'],
    before: function (browser) {
      utils(browser).openBrowser();
    },

    'Search for a product': function(browser) {
      utils(browser).searchProduct();
      browser.pause(2000);
    },

    'Add product to cart': function(browser) {
        utils(browser).addToCart();
        browser.pause(2000);
      },

    after: function (browser) {
      utils(browser).closeBrowser();
    },
};
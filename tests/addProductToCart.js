var utils = require('../page-objects/utils.js');

module.exports = {
  '@tags': ['Cart'],
    before: function (browser) {
      utils(browser).openBrowser();
    },

    'Search for a product': function(browser) {
      utils(browser).searchProduct();
    },

    'Add product to cart': function(browser) {
        utils(browser).addToCart();
      },

    after: function (browser) {
      utils(browser).closeBrowser();
    },
};
//All functions/actions go here and 

const data = require('./data'); //Imports data used
const elements = require('./elements') //Imports elements used

const util = function (browser) {

    //Launches the browser and visits the specified url
    this.openBrowser = function () {
        browser
            .windowMaximize()
            .url(data.baseURL)
            .waitForElementVisible('body', 2000, 'Page loaded successfully')
            .assert.title('Andela – My Andela WordPress Site', 'Page title is My Andela Wordpress Site');
        return browser;
    };

    //Closes the browser
    this.closeBrowser = function () {
        browser
            .pause(3000)
            .end();
    };

    //Search for a product
    this.searchProduct = function () {
        browser
            .setValue(elements.homePageSearchBox, data.productName)
            .click(elements.searchButton)
            .waitForElementVisible('body', 2000, 'Page loaded successfully')
            .assert.containsText(elements.productTitle, data.productName, 'Product title matches searched product')
            .pause(2000);
    };

    //Add product to cart
    this.addToCart = function () {
        browser
            .clearValue(elements.quantityTextBox)
            .pause(2000)
            .setValue(elements.quantityTextBox, data.quantity)
            .click(elements.addToCartButton)
            .waitForElementVisible('body', 2000, 'Page loaded successfully')
            .assert.containsText(elements.addToCartSuccessMessageField, data.addToCartSuccessMessage, 'Add to cart success message is displayed.')
            .pause(2000);
    };

    return this;
};

module.exports = util;
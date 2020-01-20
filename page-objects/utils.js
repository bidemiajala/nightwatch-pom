//Contains all elements and test data
const util = function(browser) {

    //Data
    const productName = 'Oplee White Power Wireless'

    //Elements
    const homePageSearchBox = '#apus-header > div.wrapper-large > div > div > div.header-bottom.clearfix > div.col-md-7 > div > form > div.main-search > div > span > input.apus-search.form-control.apus-autocompleate-input.tt-input'
    const searchButton = '#apus-header > div.wrapper-large > div > div > div.header-bottom.clearfix > div.col-md-7 > div > form > button'
    const productTitle = '#product-741 > div.row.top-content > div.col-md-5.col-xs-12 > div > div > h1'

    //Launches the browser and visits the specified url
    this.openBrowser = function () {
        browser
            .windowMaximize()
            .url('https://andela.netface.co/')
            .waitForElementVisible('body', 2000, 'Page loaded successfully')
            .assert.title("Andela – My Andela WordPress Site", 'Page title is My Andela Wordpress Site');
        return browser;
    };

    //Close the browser
    this.closeBrowser = function () {
        browser
            .pause(3000)
            .end();
    };

    //Search for a product
    this.searchProduct = function () {
        browser
            .setValue(homePageSearchBox, productName)
            .click(searchButton)
            .waitForElementVisible('body', 2000, 'Page loaded successfully')
            .assert.title(productName + ' - Andela', 'Page title is equal to the product searched')
            assert.containsText(productTitle, productName, 'Product title matches searched product');
    };

    return this;
};

module.exports = util;
# Andela QA Ecercise

## Objective

    1) To explain the test strategy for automating a wordpress CMS site.
    2) To validate and ensure an e-commerce website is fully functional, automated test cases should ensure key user flows are performing as expected using Nightwatch JS.
    The user should be able to search for a product and add to cart.

## Test Strategy
### These are the actions the points to consider while automating a wordpress site:
1) Based on `permalinks` configuration, assert for correctness. For instance, product permalinks contain the product name but hyphenated. This can be achieved making use of concatenation and textTransform.
2) Verify the arangement of the menu being used by making use of indexes. Assert for which comes first, second... (`nth item` approach works here).
3) For wordpress sites that handle authentication, the sign-up and sign-in fields should be tested. Positive and negative tests should be considered. For a login test, the following scenarios should be considered:
    - Login with valid email and password
    - Login with invalid email and password
    - If invalid, assert for error toast message
    - Check for leading and trailing whitespace
    - Check for case-sensitivity for emails
    - Use regex to check for valid and invalid emails
4) If a product is deleted, verify that the url is no longer available.
5) Verify that deleted users can no longer access their account.
6) Verify that scheduled posts are published as planned. To automate this, a test script can be written and a cron job used to trigger the automated test at the stated time.


## Test Cases
### E-Commerce Website - Smart Market (Sale of Electronic devices)
1) Home Page should open and validate page title.
    - Steps
        - Open Homepage
        - Verify page title

2) Search Functionality is working.
    - Steps
        - Click on the home page search Box.
        - Search for a specific product
        - Assert a valid page result based on the searched product

3) Add Product to cart
    - Steps
        - Search for a product
        - Select quantity
        - Click Add to cart
        - Validate response message


### Run a test using tags

    npm test --tag <tag name>


### Run the entire test suite

    npm test
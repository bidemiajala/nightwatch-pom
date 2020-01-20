# Andela QA Ecercise

## Objective

    To validate and ensure an e-commerce website is fully functional, automated test cases should ensure key user flows are performing as expected using Nightwatch JS.
    The user should be able to search for a product and add to cart.

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
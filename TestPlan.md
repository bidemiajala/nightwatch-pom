# Test Plan

## Objective

    To validate and ensure an e-commerce website is fully functional, automated test cases should ensure key user flows are performing as expected.

## Test Cases
### E-Commerce Website - Smart Market (Sale of Electronic devices)
1) Home Page should open and validate all the images and buttons are functional.
    - Steps
        - Open Homepage
        - Click on Homepage Headers

2) Search Functionality is working.
    - Steps
        - Click on search Box.
        - Search for a specific product
        - Assert a valid page result based on the searched product

3) Existing users should be able to login
    - Steps
        - Go to login page
        - Enter username/password
        - Click Login
        - Validate correct user

4) Forgot Password
    - Steps
        - Go to login page
        - Enter username
        - Click Forgor Password
        - Complete the step and validate message

5) Product Page Functionality
    - Steps
        - Go to a Product page
        - Validate options
        - Assert price
        - Add to cart
        - Go to cart page and validate the product is added to cart

6) Place an order
    - Steps
        - Add a product to cart
        - Go to cart page
        - Fill out the forms
        - Place an order

### Run a test using tags

    npm test --tag <tag name>


### Run the entire test suite

    npm test
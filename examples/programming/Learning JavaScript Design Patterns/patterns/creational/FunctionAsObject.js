"use strict";

/**
 * Function As Object pattern:
 *
 * This approach uses the Function As Object pattern.
 * Constructor functions (createCustomer and createRental) return a JavaScript object (hash) of function references.
 * Each constructor function contains a closure that holds the object's data.
 * Because the returned object of functions are in the same function context they can access this data.
 * I see this as exactly the same pattern as using the class syntax, but implemented a different way.
 *
 * @see https://martinfowler.com/articles/refactoring-video-store-js/
 */

function createCustomer(data, movies) {
    return {
        name: () => data.name,
        rentals: rentals,
        amount: amount,
        frequentRenterPoints: frequentRenterPoints
};

    function rentals() {
        return data.rentals.map(r => createRental(r, movies));
    }
    function frequentRenterPoints() {
        return rentals()
            .map((r) => r.frequentRenterPoints())
            .reduce((a, b) => a + b, 0)
        ;
    }
    function amount() {
        return rentals()
            .reduce((total, r) => total + r.amount(), 0);
    }

}



// usage

const customer = createCustomer(customerArg, movies);
customer.name()
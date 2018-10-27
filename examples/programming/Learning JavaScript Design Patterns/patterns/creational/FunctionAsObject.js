"use strict";

// Function As Object pattern
// see https://martinfowler.com/articles/refactoring-video-store-js/

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
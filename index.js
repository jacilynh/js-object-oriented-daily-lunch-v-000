let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

// * `deliveries()` - returns all deliveries in  neighborhood
// * `customers()` - returns all customers in neighborhood
// * `meals()` - returns a **unique** list of meals that have been ordered in a particular neighborhood (you might want to do this one last)

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
    }
    
    deliveries() {
      return store.deliveries.filter((delivery) => {
        return delivery.neighborhoodId === this.id;
      }.bind(this))
    }
    
    // customers() {
    //   return store.customers.filter((customer) => {
    //     return delivery.customerId == this.id;
    //   })
    // }
  }

// * `deliveries()` — returns all of the deliveries that customer has received
// * `meals()` - returns all meals that a customer has ordered
// * `totalSpent()` - returns the total amount that the customer has spent on food.
class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
  }
}

// * `deliveries()` - returns all of the deliveries associated with a particular meal.
// * `customers()` - returns all of the customers who have had the meal delivered. Be careful not to return the same customer twice if they have ordered this meal multiple times.
// * `byPrice()` - A **[class method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)** that orders all meal instances by their price in descending order. Use the `static` keyword to write a class method.
// class Meal {
//   constructor(title, price) {
//     this.id = ++mealId;
//     this.title = title;
//     this.price = price;
//   }
// }

// * `new Delivery()` — initialized with `mealId`, `neighborhoodId`, and `customerId`. It returns an object that has attributes of `mealId`, `neighborhoodId`, `customerId`, and `id`
// * `meal()` - returns the meal associated with a particular delivery
// * `customer()` - returns the customer associated with a particular delivery
// * `neighborhood()` - returns the neighborhood associated with a particular delivery
// class Delivery {
//   constructor(meal, neighborhood, customer) {
//     this.id = ++deliveryId;
//     this.mealId = mealId;
//     this.neighborhoodId = neighborhoodId;
//     this.customerId = customerId;
//   }
// }
const customer = {
  firstName: "jake",
  lastNmae: "smith",
  email: "jaekSmith!aol.com",
  phone: undefined,
  zipcode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};
// print object table to verify  keys & values
// console.table(customer);

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipcode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// print object keys and values
// console.log(Object.keys(customer));
// console.log(Object.values(customer));

// print object table to verify keys & values
// console.table(customer);

delete customer.zipcode;
delete customer.favoriteStore;
// print object table to verify  keys & values
// console.table(customer);

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.table(customer);

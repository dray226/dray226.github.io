// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [{
    name: "Tomates",
    vegetarian: true,
    glutenFree: true,
    price: 1.05,
    organic: true
  },
  {
    name: "Pain",
    vegetarian: true,
    glutenFree: false,
    price: 2.50,
    organic: false
  },
  {
    name: "Saumon",
    vegetarian: false,
    glutenFree: true,
    price: 8.99,
    organic: false
  },
  {
    name: "Flocon d'avoine",
    vegetarian: true,
    glutenFree: true,
    price: 5.25,
    organic: true
  },
  {
    name: "Spaghettis",
    vegetarian: true,
    glutenFree: false,
    price: 1.95,
    organic: false
  },
  {
    name: "Tarte au chocolat",
    vegetarian: true,
    glutenFree: true,
    price: 6.25,
    organic: false
  },
  {
    name: "Oeufs",
    vegetarian: false,
    glutenFree: true,
    price: 2.99,
    organic: true
  },
  {
    name: "Fromage de chevre",
    vegetarian: true,
    glutenFree: true,
    price: 6.00,
    organic: false
  },
  {
    name: "Fillet de boeuf",
    vegetarian: false,
    glutenFree: true,
    price: 8.59,
    organic: true
  },
  {
    name: "Lait",
    vegetarian: true,
    glutenFree: true,
    price: 2.05,
    organic: true
  }
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [...products];

  if (restriction.includes("Vegetarian")) {
    product_names = product_names.filter(product => product.vegetarian);
  }
  if (restriction.includes("GlutenFree")) {
    product_names = product_names.filter(product => product.glutenFree);
  }
  if (restriction.includes("Organic")) {
    product_names = product_names.filter(product => product.organic);
  }

  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}

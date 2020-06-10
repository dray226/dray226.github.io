
// Gamme de produits, chaque produit est un objet avec des domaines différents
// Un ensemble d'ingrédients doit être ajouté aux produits
//TOUTES LES IMAGES VENNENT DU SITE WALMART walmart.ca

var products = [
{
  name: "Fraises",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 4.25,
  category: "vegetablesANDfruits",
  image: "images/strawberries.jpg"
},
{
  name: "Pain",
  vegetarian: true,
  glutenFree: false,
  organic: true,
  price: 1.35,
  category: "bakery",
  image: "images/bread.jpg"
},
{
  name: "Brocoli",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 0.99,
  category: "vegetablesANDfruits",
  image: "images/brocoli.jpg"
},
{
  name: "Tomates",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 2.75,
  category: "vegetablesANDfruits",
  image: "images/tomatoes.jpg"
},
{
  name: "Lait",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 3.50,
  category: "dairy",
  image: "images/milk.jpg"
},
{
  name: "Jus d'orange",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 2.50,
  category: "beverages",
  image: "images/jus.jpg"
},
{
  name: "Oranges",
  vegetarian: true,
  glutenFree: true,
  organic: true,
  price: 3.50,
  category: "vegetablesANDfruits",
  image: "images/Oranges.jpg"
},
{
  name: "Poulet",
  vegetarian: false,
  glutenFree: true,
  organic: false,
  price: 9.00,
  category: "meat",
  image: "images/Chicken.jpg"
},
{
  name: "Saumon",
  vegetarian: false,
  glutenFree: true,
  organic: true,
  price: 10.00,
  category: "meat",
  image: "images/salmon.jpg"
},
{
  name: "Eau",
  vegetarian: true,
  glutenFree: true,
  organic: false,
  price: 2.00,
  category: "beverages",
  image: "images/water.jpg"
},
{
  name: "Cup Cakes",
  vegetarian: true,
  glutenFree: false,
  organic: false,
  price: 5.25,
  category: "bakery",
  image: "images/cup.jpg"
},
];

function compare( a, b ) {
if ( a.price < b.price ){
  return -1;
}
if ( a.price > b.price ){
  return 1;
}
return 0;
}

products.sort(compare);


// compte tenu des restrictions prévues, établir une liste réduite de produits
// les prix devraient être inclus dans cette liste, ainsi qu'un tri basé sur le prix

function restrictListProducts(prods, restriction, category) {
let product_names = [];

for (let i=0; i<prods.length; i+=1) {
  if((prods[i].category == category) || (category == "all")){
    if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
      product_names.push(prods[i].name);
    }
    else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
      product_names.push(prods[i].name);
    }
    else if ((restriction == "Organic") && (prods[i].organic == true)){
      product_names.push(prods[i].name);
    }
    else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
      product_names.push(prods[i].name);
    }
    else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
      product_names.push(prods[i].name);
    }
    else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
      product_names.push(prods[i].name);
    }
    else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
      product_names.push(prods[i].name);
    }
    else if (restriction == "None"){
      product_names.push(prods[i].name);
    }
  }
}
return product_names;
}

function restrictListPrices(prods, restriction, category) {
let prices = [];

for (let i=0; i<prods.length; i+=1) {
  if((prods[i].category == category) || (category == "all")){
    if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
      prices.push(prods[i].price);
    }
    else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
      prices.push(prods[i].price);
    }
    else if ((restriction == "Organic") && (prods[i].organic == true)){
      prices.push(prods[i].price);
    }
    else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
      prices.push(prods[i].price);
    }
    else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
      prices.push(prods[i].price);
    }
    else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
      prices.push(prods[i].price);
    }
    else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
      prices.push(prods[i].price);
    }
    else if (restriction == "None"){
      prices.push(prods[i].price);
    }
  }
}
return prices;
}

function restrictListImages(prods, restriction, category) {
let images = [];



for (let i=0; i<prods.length; i+=1) {
  if((prods[i].category == category) || (category == "all")){
    if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
      images.push(prods[i].image);
    }
    else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
      images.push(prods[i].image);
    }
    else if ((restriction == "Organic") && (prods[i].organic == true)){
      images.push(prods[i].image);
    }
    else if ((restriction == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
      images.push(prods[i].image);
    }
    else if ((restriction == "GlutenFreeOrganic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
      images.push(prods[i].image);
    }
    else if ((restriction == "VegetarianOrganic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
      images.push(prods[i].image);
    }
    else if ((restriction == "All") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
      images.push(prods[i].image);
    }
    else if (restriction == "None"){
      images.push(prods[i].image);
    }
  }
}
return images;
}

// Calculer le prix total des articles, le paramètre reçu étant une liste de produits
function getTotalPrice(chosenProducts) {
totalPrice = 0;
for (let i=0; i<products.length; i+=1) {
  if (chosenProducts.indexOf(products[i].name) > -1){
    totalPrice += products[i].price;
  }
}
return totalPrice;
}

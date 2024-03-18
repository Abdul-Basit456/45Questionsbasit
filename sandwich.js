"use strict";
function make_sandwich(...items) {
    console.log("Making sandwiches wtih items mentioned below:");
    items.forEach(item => { (console.log("- " + item)); });
}
make_sandwich("Bread White", "turkey", "ketchup", "hummus", "lettuce");
console.log("\n");
make_sandwich("sour dough", "ham", "mayo", "onions");
console.log("\n");
make_sandwich("Bread", "Turkey", "mustard");

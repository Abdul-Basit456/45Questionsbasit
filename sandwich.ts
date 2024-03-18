/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/


function make_sandwich(...items):void{
    console.log("Making sandwiches wtih items mentioned below:")
    items.forEach(item=>{(console.log("- "+item))})
}

make_sandwich("Bread White","turkey","ketchup","hummus","lettuce")
console.log("\n")
make_sandwich("sour dough","ham","mayo","onions")
console.log("\n")
make_sandwich("Bread","Turkey","mustard")

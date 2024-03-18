"use strict";
let magiciannames = ["Hermione", "Ron", "Harry", "Dumbledore"];
let greatmagician = magiciannames.slice();
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magiciannames);
console.log("\n");
//Now making make_great function
function make_great(b) {
    for (let i = 0; i < b.length; i++) {
        b[i] = "The Great " + b[i];
    }
    return b;
}
console.log("\nModfied list using make_great() function");
make_great(greatmagician);
show_magician(greatmagician);

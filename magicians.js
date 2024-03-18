"use strict";
let magician_names = ["magician1", "magician2", "magician3"];
function show_magician(a) {
    console.log(a);
}
show_magician(magician_names);
//Now making make_great function
function make_great(b) {
    for (let i = 0; i < magician_names.length; i++) {
        magician_names[i] = "The Great " + magician_names[i];
    }
}
console.log("\nModified list using make_great() function");
make_great(magician_names);
show_magician(magician_names);

"use strict";
let age = 17;
if (age < 2) {
    console.log("You're a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("You're a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("You're a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("You're a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You're a adult.");
}
else if (age > 65) {
    console.log("You're an elder");
}

"use strict";
function shirt_maker(size = "Medium", title = "I Love Typescript") {
    console.log("Shirt size:" + size);
    console.log("Title:" + title);
}
//Large shirt by default
function Largeshirt(size = "Large", title = "I love Typescript") {
    console.log("Shirt size:" + size);
    console.log("Title:" + title);
}
function Shirtmaker(size, title) {
    console.log("Shirt size:" + size);
    console.log("Title:" + title);
}
console.log("\n\n");
console.log("For Large Shirt");
Largeshirt();
console.log("\nFor Medium Shirt");
shirt_maker();
console.log("\nFor Small Shirt");
Shirtmaker("Small", "konichiwa");

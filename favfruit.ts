/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/


let fav_fruit=["strawberry","guava","mangoe"]

if (fav_fruit.includes("strawberry")){console.log("You really like strawberries!")}

if (fav_fruit.includes("guava")){console.log("You really like guavas!")}

if (!fav_fruit.includes("bananas")){console.log("You don't like bananas")}

if (fav_fruit.includes("mangoe")){console.log("You really like mangoes!")}

if (!fav_fruit.includes("pears")){console.log("You don't like pears")}
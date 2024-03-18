/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/


function shirt_maker(size:string="Medium", title:string="I Love Typescript"):void{
    console.log("Shirt size:"+size)
    console.log("Title:"+title)
}


//Large shirt by default

function Largeshirt(size:string="Large", title:string="I love Typescript"):void{
    console.log("Shirt size:"+size)
    console.log("Title:"+title)
}

function Shirtmaker(size:string, title:string):void{
    console.log("Shirt size:"+size)
    console.log("Title:"+title)
}

console.log("\n\n")
console.log("For Large Shirt")
Largeshirt()
console.log("\nFor Medium Shirt")
shirt_maker()
console.log("\nFor Small Shirt")
Shirtmaker("Small","konichiwa")
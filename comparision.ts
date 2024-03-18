/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/


let word1:string="Hello"
let word2:string="Hello"
let word3:string="World"

console.log("does word1 = word2?")
console.log(word1 === word2)

console.log("does word1 = word3?")
console.log(word1 === word3)

let normal = "Hello"
let lowercase = "hello"

console.log("is Hello = hello??")
console.log(normal === lowercase)

//Numerical inequality or equality checking

let a=6 ; let b=9 ;let c=6 ;let d=50 
console.log("\n a=6 \n b=9 \n c=6 \n d=50")
console.log("\n is a = c?")
console.log(a==c)
console.log("\n Is a = b?")
console.log(a==b)
console.log("\n is a <= d?")
console.log(a == d)
console.log("\n is b >= c?")
console.log(b>=c)
console.log("\n is d > b?")
console.log(d>b)
console.log("\n is c < b?")
console.log(c<b)
console.log()

//Using AND or OR operation
console.log("\n")

console.log("a==b && a==c = false")
console.log(a==b && a==c)

console.log("a<=c && a==a is true")
console.log (a<=c && a==a)


console.log("\n")
console.log("a==b || a>d = false")
console.log(a==b || a>d)

console.log("d<b || a<b = true")
console.log(d>b || a<b)

let array1= ["Burger","Sandwich","Fries","Pizza"]
console.log(array1)

console.log("is Burger in the array?")
console.log(array1.includes("Burger"))

console.log("\nis Noodles in the array1")
console.log(array1.includes("Noodles"))
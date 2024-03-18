//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these item



interface Gamesinfo {
    name:string;
    genre:string
    publishedon:number
}

let gamesinfo:Gamesinfo[]=[{
    name:"Minecraft",genre:"adventure",publishedon:2007},
    {name:"pg3d",genre:"fps",publishedon:2015},
    {name:"nfs",genre:"racing",publishedon:1997},
]
/*
console.log("gamesinfo:",gamesinfo)

//Intentional error

let normalarraya: number[] = [1, 2, 3, 4, 5];
let indexError = normalarraya[10];
*/
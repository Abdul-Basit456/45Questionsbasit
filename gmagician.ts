/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


*/


let magiciannames = ["Hermione","Ron","Harry","Dumbledore"]

let greatmagician=magiciannames.slice()

function show_magician(magicians){
    magicians.forEach(magician => {console.log(magician)     
    });
}

show_magician(magiciannames)

console.log("\n")

//Now making make_great function

function make_great(b:any[]){
    for(let i =0;i<b.length;i++){
        b[i]="The Great "+b[i]
}
return b;
}


console.log("\nModfied list using make_great() function")
make_great(greatmagician)

show_magician(greatmagician)

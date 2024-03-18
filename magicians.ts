/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/


let magician_names = ["magician1","magician2","magician3"]

function show_magician(a:any){
    console.log(a)
}

show_magician(magician_names)

//Now making make_great function

function make_great(b:any){
    for(let i =0;i<magician_names.length;i++){
        magician_names[i]="The Great "+magician_names[i]
    }
}

console.log("\nModified list using make_great() function")
make_great(magician_names)

show_magician(magician_names)
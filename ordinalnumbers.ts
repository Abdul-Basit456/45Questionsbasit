/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/

for(let a = 1; a <= 10; a++){
    let ordinalvar;
    if(a == 1){ordinalvar = "st"}
    else if(a == 2){ordinalvar  = "nd"}
    else if(a == 3){ordinalvar = "rd"}
    else {ordinalvar = "th"}
console.log(a + ordinalvar + "\n")
}

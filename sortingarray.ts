/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/




let place=["burj khalifa","Nagara falls","china glass bridge","sawat","calafornia glass beach"]
console.log("original array \n")
console.log(place)

let newplace=Array.from(place)

//had to use duplicate array since localecompare effects original array

let alphasortedarray=place.sort((a,b)=> a.localeCompare(b, undefined, {sensitivity:"base"}))
console.log("alphabetically ordered array \n")
console.log(alphasortedarray)

console.log("original array \n")
console.log(newplace)

let reversedalphasortedarray=place.sort((a,b)=> b.localeCompare(a))
console.log("reversed alphabetically ordered array \n")
console.log(reversedalphasortedarray)

console.log("original array \n")
console.log(newplace)

place.reverse()
console.log("array reversed \n")
console.log(place)

place.reverse()
console.log("array reversed again so its back to normal \n")
console.log(place)

place.sort((a,b)=> a.localeCompare(b, undefined, {sensitivity:"base"}))
console.log("the order of the original array has been set to alphabetical \n")
console.log(place)

place.sort((a,b)=> b.localeCompare(a, undefined, {sensitivity:"base"}))
console.log("the order of the original array has been set to reversed alphabetical \n")
console.log(place)

console.log("now the original array has been saved in reversed alphabetical order \n")
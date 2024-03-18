/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

Shrinking Guest List: You just found out that 
*/

//============================================================================================

//replacing elements from array

let guestnames=["Zayan","Shahzil","Rafid","leo"]
let message1=(" You're invited at dinner at house of Abdul Basit")
for(let i=0;i<guestnames.length;i++){
    console.log("Mr."+guestnames[i]+message1)
}
console.log("\n")
console.log("\t Leo couldn't make it \n")

guestnames.splice(3,1,"Ashar")

//this function was commented out to reduce the space problem in console

/*for(let i=0;i<guestnames.length;i++){
    console.log("Mr."+guestnames[i]+message1)
}
*/

//adding more guests

console.log("\t adding more guests because there are three seats empty \n")

//adding a guest at the beginning of an array
guestnames.unshift("Ghazan")

guestnames.splice(3,0,"Ayan")

//cant use append()

guestnames.push("ahmed")


for(let i=0;i<guestnames.length;i++){
    console.log("Mr."+guestnames[i]+message1)
}

 //Shrinking array
//oh no few tables left
console.log("-------------------------------------------------------------------------------------------------")
console.log("\t can only invite 2 guests \n")

let sadmessage=" Unfortunately I may not be able to invite you due to arrangement problems."

let invtednot1=guestnames.pop()
console.log("Sorry, "+invtednot1+sadmessage)
let invtednot2=guestnames.pop()
console.log("Sorry, "+invtednot2+sadmessage)
let invtednot3=guestnames.pop()
console.log("Sorry, "+invtednot3+sadmessage)
let invtednot4=guestnames.pop()
console.log("Sorry, "+invtednot4+sadmessage)
let invtednot5=guestnames.pop()
console.log("Sorry, "+invtednot5+sadmessage)

//Removing rest of the elements

guestnames.pop()
guestnames.pop()

console.log("------------------------------------------------------------------------------------------------")

console.log("\t AFTER PUSHING REST OF THE ELEMNTS (no more elements in the array) \n ")

console.log(guestnames)

console.log("______________________________________________END________________________________________________")
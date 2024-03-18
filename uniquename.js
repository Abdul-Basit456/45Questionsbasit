"use strict";
let current_user = ["Zeeshan", "Aman", "Zayan", "Rafid", "Shazil"];
let new_users = ["Zeeshan", "Rabia", "Fatima", "Shazil", "Alyian"];
for (let newusers of new_users) {
    let takenusernames = current_user.some(existinguser => existinguser.toLowerCase() === newusers.toLowerCase());
    if (takenusernames) {
        console.log("username " + newusers + " already taken please pick a new one");
    }
    else {
        console.log("Username " + newusers + " available");
    }
}

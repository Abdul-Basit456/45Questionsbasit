"use strict";
//Name Cases: Store a person’s name in a variable, and
//then print that person’s name in lowercase, uppercase, and titlecase.
let Personname = "abdul basit";
//uppercase
console.log(Personname.toUpperCase());
//lowercase
console.log(Personname.toLowerCase());
//titlecase
console.log(Personname.charAt(0).toUpperCase() + Personname.slice(1).toLowerCase());

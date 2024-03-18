"use strict";
let employees = ["Zayan", "Shazil", "admin", "Aman", "sulaiman"];
for (let i = 0; i < employees.length; i++) {
    console.log("Hello, " + employees[i] + " thanks for logging in again");
    if (employees[i] === "admin") {
        console.log("Hello, admin would you like to see today's report");
    }
}

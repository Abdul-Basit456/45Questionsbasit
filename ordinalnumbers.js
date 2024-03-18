"use strict";
for (let a = 1; a <= 10; a++) {
    let ordinalvar;
    if (a == 1) {
        ordinalvar = "st";
    }
    else if (a == 2) {
        ordinalvar = "nd";
    }
    else if (a == 3) {
        ordinalvar = "rd";
    }
    else {
        ordinalvar = "th";
    }
    console.log(a + ordinalvar + "\n");
}

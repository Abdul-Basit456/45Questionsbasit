"use strict";
function createcar(manufacturer, modelname, ...options) {
    let car = {
        Manufacturing_Company: manufacturer,
        Model_Name: modelname,
    };
    options.forEach(option => {
        const key = option[0];
        const value = option[1];
        car[key] = value;
    });
    return car;
}
const Mycar = createcar("Honda", "civic", ["colour:", "blue"], ["Year:", "2022"]);
console.log(Mycar);

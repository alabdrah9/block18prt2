const add = require(`./example`);
//Expect when given two numbers, the number returned is value is of the two numbers added together

test(`addition works`, () =>{
    expeect(add(2,3)). toBe(5);
});
let myNumber = 123;
let myString = "2025-05-23";
let myArray = [
    'Monday', 
    'Tuesday', 
    'Wenesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];
let myObject = {
    type: 'car',
    brand: 'audi',
    kw:'334',
    color:'red',
    price:'120.000,50'
};

let myObject2 = {
    type: 'car',
    brand: 'opel',
    kw:'90',
    color:'brown',
    price:"20.000,50", //
};

console.log("Die abbuchung erfolgt von dem konto mit der nummer: " +myNumber);

console.log("the bill has been paid on " + myArray[3]);

console.log("my car has " + myObject.kw + "and is from the brand" + myObject.brand);

console.log(myObject.kw - myObject2.kw);



myObject.price = Number(myObject.price.replace(".", "").replace(",", "."));
myObject2.price = Number(myObject2.price.replace(".", "").replace(",", "."));

console.log(myObject.price, myObject2.price);

console.log(myObject.price, myObject2.price);

console.log(new Date(myString));

let price = "$ 1.433,08";

console.log(price.substring(2, price.length));

let price2 = "7.247,00 Euro";
console.log(price2.replace("Euro", ""));

let serverResponse = '["monday", "tuesday", "wenesday", "thursday"]';
console.log(JSON.parse(serverResponse));

let serverResponse2 = '{"test": 1, "email": "daniela@gmx.de", "zip": "5600"}';
console.log(JSON.parse(serverResponse2)); 

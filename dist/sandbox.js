// Typescript uses script typing, hence you cant change the type of a data type
// You can specify which data typre youre expecting for a function parameter 
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));
// same goes for arrays. Typescript picks on the initial data types and sets the precedent to accept only those types moving on. example
var names = ['okwy', 'ken', 'ify', 8];
// we cant do names.push(5) because its expecting a string
names.push('ngoo');
names.push(5);
console.log(names);
var dev = {
    name: names[2],
    lang: 'Rust',
    yoe: 3
};
var kev = 'hdfc';
dev.name = kev;
// once youre redeclaring an object variable you cant change the structure of the object. it has to have the same exact structure as when you initially defined it.
dev = {
    name: 'hey',
    lang: 'js',
    yoe: 8
};
console.log(dev.name);
// once youve defined an object you then cant add additional properties to it
var character;
var age;
var isLoggedIn;
// arrays
var list; //just sets types but isnt initialized
var lists = []; //sets type and initializes it
// union types 
var mixed = [];
mixed.push('hello');
mixed.push(5);
mixed.push(false);
console.log(mixed);
var uid;
uid = '12k';
uid = 234;
var userOne;
userOne = { name: 'user', id: uid, age: 78 }; //we can also set userOne to an array because an array is an object. else if it must be an actual object
var userTwo;
userTwo = { name: 'user', id: uid, age: 78 }; //we can also set userOne to an array because an array is an object. else if it must be an actual object
// Not only can you not change the type of the values you cant also change the type of the variable ie an array cant be changed to a string or number.

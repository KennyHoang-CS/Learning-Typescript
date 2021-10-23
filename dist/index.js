"use strict";
// Basic Types
let id = 5;
let company = 'Learning Typescript!';
let isLearning = true;
let x = 'Any?';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'string', true];
// Tuple
let person = [1, 'Kenny', true];
// Tuple Array 
let employee;
employee = [
    [1, 'Kenny'],
    [2, 'Tommy'],
    [3, 'Bobby'],
];
// Union 
let pid;
pid = '22';
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; // console.log(Direction1.Right) => prints 3
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Kenny'
};
// Type Assertion 
let cid = 1;
let customerId = cid;
// let customerId = cid as number; => other approach. 
// Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Kenny'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const kenny = new Person(1, 'Kenny H');
console.log(kenny.register()); // prints 'Kenny is now registered'
// Sub-classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Michael', 'Developer');
console.log(emp.name); // prints Michael
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['kenny', 'tommy', 'joe']);

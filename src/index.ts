
// Basic Types
let id: number = 5; 
let company: string = 'Learning Typescript!';
let isLearning: boolean = true; 
let x: any = 'Any?';

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1,'string', true]; 

// Tuple
let person: [number, string, boolean] = [1, 'Kenny', true]; 

// Tuple Array 
let employee: [number,string][]
employee = [
    [1, 'Kenny'],
    [2, 'Tommy'],
    [3, 'Bobby'],
];

// Union 
let pid: string | number;
pid = '22';  

// Enum 
enum Direction1 {
    Up, // console.log(Direction1.Up) => prints 0
    Down,
    Left,
    Right // console.log(Direction1.Right) => prints 3
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Kenny'
}

// Type Assertion 
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number; => other approach. 

// Functions 
function addNum(x: number, y: number): number {
    return x + y; 
}

function log(message: string | number): void {
    console.log(message); 
}


// Interfaces 
interface UserInterface {
    //readonly id: number,
    id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Kenny'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

/*
    Types vs Interfaces?

    Answer: Types can only be used for primitives and unions while interfaces does not. 
*/

interface PersonInterface {
    id: number,
    name: string,
    register(): string; 
}


// Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
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
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position; 
    }
}

const emp = new Employee(3, 'Michael', 'Developer');
console.log(emp.name); // prints Michael


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items); 
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['kenny', 'tommy', 'joe']);


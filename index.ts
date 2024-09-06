// const greeting: string = "Hello, TypeScript!";
// console.log(greeting);

function greet(name: string): string {
    return "hello, " + name;
}

console.log(greet("Beau"));

function greet2(value: string | number): string | number {
    if (typeof value === 'string') {
        return "hello, " + value;
    } else if (typeof value === 'number') {
        return value * 2;
    } else {
        return "Unsupported type";
    }
}

console.log(greet2(42));

function add(number1: number, number2: number, number3?: number): number {
    if (number3) {
        return number1 + number2 + number3;
    } else {
        return number1 + number2;
    }
}

console.log(add(1, 2, 3));
console.log(add(1, 2));

type MathOperation = (x: number, y:number) => number;

type NameAdd = (firstname: string, lastname: string, age?:number) => string | number;
const fullName: NameAdd = (firstName, lastName, age) => {
    if (age !== undefined) {
        return `${firstName} ${lastName} is ${age} years old`;
    } else {
        return `${firstName} ${lastName}`;
    }
};
console.log(fullName("John", "Doe")); // Outputs: John Doe
console.log(fullName("Jane", "Smith", 30)); // Outputs: Jane Smith is 30 years old


const add2: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x-y;
console.log(add2(30,31));
console.log(subtract(50,25));


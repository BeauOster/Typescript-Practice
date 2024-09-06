interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Bob",
    age: 30
}

interface Address {
    street: string;
    city: string;
}

interface Contact extends Person {
    address: Address;
    phone: string;
}

const JohnContact: Contact = {
    name: "John",
    age: 34,
    address: {
        street: "Downtown",
        city: "Austin"
    },
    phone: "555-5555"
};

console.log(JohnContact);


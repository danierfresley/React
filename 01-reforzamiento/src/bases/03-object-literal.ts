const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        street: 'Malibu Point',
        number: 10880,
    }
}

//const ironman = { ...person};

const ironman = structuredClone(person);

ironman.firstName = 'Peter';
person.age = 46;

console.log(person, ironman);
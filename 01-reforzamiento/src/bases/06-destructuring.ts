const person = {
  name: "John Doe",
  age: 30,
  key: 'Ironman',
}

const { name: ironmanName, age } = person;

console.log({ironmanName, age}); // Output: { ironmanName: "John Doe", age: 30 }

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const userContext = ({ key, name, age, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    }
}

const context = userContext(person);
console.log(context); // Output: { keyName: "Ironman", user: { name: "John Doe", age: 30 }, rank: undefined }
console.log(context.user.name); // Output: "John Doe"

const {keyName, user: {name}, rank} = userContext(person);
console.log({rank, keyName, name}); // Output: { rank: undefined, keyName: "Ironman", name: "John Doe" }
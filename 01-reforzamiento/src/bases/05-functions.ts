interface User {
    id: number;
    username: string;
    isPro: boolean;
}


function greet(name: string): string {
    return `Hello ${name}`;
    }
const greeting = greet('Danier');
console.log(greeting);

const greet2 = (name: string): string => `Hello ${name}`;
const greeting2 = greet2('Fresley');
console.log(greeting2);

function getUser(): User {
    return {
        id: 1,
        username: 'Danier',
        isPro: true
    };
}

const myUser = getUser();
console.log('User Info:', myUser);

const getUser2 = () => ({
        id: 2,
        username: 'Fresley',
        isPro: false
    });

const myUser2 = getUser2();
console.log('User Info:', myUser2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach(console.log);
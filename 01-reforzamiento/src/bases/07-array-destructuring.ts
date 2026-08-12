const characterName = ['Goku', 'Vegeta', 'Gohan', 'Trunks'];

const [,,,trunks] = characterName;
console.log({trunks}); // Output: { trunks: "Trunks" }

function returnArrayFn(): [string, number] {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnArrayFn();
console.log({letters, numbers}); // Output: { letters: "ABC", numbers: 123 }    



const useSate = (value: string) => {
    return [
        value,
        (newValue: string) => {
            console.log({newValue});
        },
    ] as const;
};

const [name, setName] = useSate('Danier');
console.log({name});
setName('Vanegas');

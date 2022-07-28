const withoutEnd = (): never => { // Funcion que nunca termina.
    while (true) {
        console.log('Hello World');
    }
}

const fail = (message: string): never => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string')
        return input.toUpperCase();
    else if (typeof input === 'number')
        return input * 2;
    else if (Array.isArray(input))
        return input.map(item => item * 2);
    else
        return fail('Unknown type');
}

console.log(example('Hello World'));
console.log(example(123));
console.log(example([1, 2, 3]));
console.log(example(true));
console.log(example([1, 2, 3]));
console.log(example(123));
console.log(example('Hello World'));

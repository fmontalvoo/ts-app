// export const spreadString = (str:string) => [...str];
export const spreadString = (str: string) => str.split('');
export const joinString = (arr: string[]) => arr.join('');

// console.log(spreadString('Hello World'));
// console.log(joinString(spreadString('Hello World')));

export const parseString = (input: string | string[]): string | string[] => {
    if (typeof input === 'string')
        return input.split('');
    else
        return input.join('');
}

console.log(parseString('Hello World'));
console.log(parseString(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']));
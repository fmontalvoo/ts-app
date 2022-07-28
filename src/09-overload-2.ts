export function parseStrg(input: string): string[];
export function parseStrg(input: string[]): string;


// export function parseStrg(input: string | string[]): string | string[] {
//     if (Array.isArray(input))
//         return input.join('');
//     else
//         return input.split('');
// }

export function parseStrg(input: unknown): unknown {
    if (Array.isArray(input))
        return input.join('');
    else if (typeof input === 'string')
        return input.split('');
    else
        return input;
}

const strArr: string[] = parseStrg('Hello World').reverse();
console.log(strArr);
const str: string = parseStrg(strArr).toUpperCase();
console.log(str);
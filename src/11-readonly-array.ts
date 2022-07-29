const numbers1: number[] = [1, 2, 3, 4, 5];
numbers1.push(6);
console.log(numbers1);
numbers1.pop();
console.log(numbers1);
numbers1.unshift(0);
console.log(numbers1);
numbers1.shift();
console.log(numbers1);

console.log('*********************************************************');

const numbers2: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers2.push(6); // Error: readonly array
// numbers2.pop(); // Error: readonly array
// numbers2.unshift(0); // Error: readonly array
// numbers2.shift(); // Error: readonly array

console.log('filter:', numbers2.filter(x => x > 2));
console.log('map:', numbers2.map(x => x * 2));
console.log('reduce:', numbers2.reduce((acc, cur) => acc + cur, 0));
console.log('some:', numbers2.some(x => x > 2));
console.log('every:', numbers2.every(x => x > 2));
console.log('indexOf:', numbers2.indexOf(2));
console.log('lastIndexOf:', numbers2.lastIndexOf(2));
console.log('includes:', numbers2.includes(2));
console.log('find:', numbers2.find(x => x >= 2));
console.log('findIndex:', numbers2.findIndex(x => x > 2));
console.log('slice:', numbers2.slice(0, 2));
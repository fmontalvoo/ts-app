export const createProduct = (id: string | number, name: string, price?: number, stock?: number) => {
    return { id, name, price: price ?? 0.5, stock: stock ?? 1 };
}

const p1 = createProduct(1, 'Product 1', 7.5, 10);
console.log(p1);
const p2 = createProduct(2, 'Product 2', 7.5);
console.log(p2);
const p3 = createProduct(3, 'Product 3', 0, 0);
console.log(p3);
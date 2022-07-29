import { products, addProduct } from './products/product.service';

addProduct({
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Product 1',
    price: 7.5,
    stock: 10,
    size: 'L',
    category: {
        id: 1,
        name: 'Category 1',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
});

console.log(products);
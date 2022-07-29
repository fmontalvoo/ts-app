import { faker } from '@faker-js/faker';

import { CreateProductDTO, UpdateProductDTO } from './products/product.dto';
import { addProduct, updateProduct, getProducts, findProduct } from './products/product.service';

for (let i = 0; i < 10; i++) {
    const product = <CreateProductDTO>{
        size: faker.helpers.arrayElement(['L', 'M', 'S']),
        stock: faker.datatype.number({ min: 1, max: 100 }),
        price: Number(faker.commerce.price()),
        name: faker.commerce.productName(),
        // tags: [faker.commerce.productAdjective(), faker.commerce.productMaterial()],
        tags: faker.random.words(4).split(' '),
        // description: faker.lorem.paragraph(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        categoryId: faker.datatype.uuid(),
    }
    addProduct(product);
}
const products = getProducts();

const product = products[4];
const updatedProduct = updateProduct(product.id,
    <UpdateProductDTO>{
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        stock: faker.datatype.number({ min: 1, max: 100 }),
        categoryId: product.category.id,
    });

console.log(findProduct({ size: 'M' }));
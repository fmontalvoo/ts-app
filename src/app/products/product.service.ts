import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from './product.dto';

const products: Product[] = [];

export const addProduct = (product: CreateProductDTO) => {
    const { categoryId, ...prod } = product;
    const newProduct = <Product>{
        ...prod,
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        category: {
            id: categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        }
    };
    products.push(newProduct);
    return newProduct;
}

export const findProduct = (filters: FindProductDTO) => {
    return products.filter((product) => {
        return Object.keys(filters).every(key => {
            const p = product as any;
            const f = filters as any;
            return p[key] === f[key];
        });
    });
}

export const updateProduct = (productId: Product['id'], changes: UpdateProductDTO) => {
    const index = products.findIndex(product => product.id === productId);
    const previousProduct = products[index];
    products[index] = <Product>{
        ...previousProduct,
        ...changes,
        updatedAt: faker.date.recent(),
    };
    return products[index];
}

export const removeProduct = (productId: Product['id']) => {
    const index = products.findIndex(product => product.id === productId);
    if (index > -1)
        products.splice(index, 1);
}

export const getProducts = (): Product[] => products;
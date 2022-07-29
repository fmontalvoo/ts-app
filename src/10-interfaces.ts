{
    type ShirtSizes = 'L' | 'M' | 'S';

    // type Product = {
    //     id: number | string;
    //     name: string;
    //     price: number;
    //     stock: number;
    //     size?: ShirtSizes;
    // };

    interface Product {
        id: number | string;
        name: string;
        price: number;
        stock: number;
        size?: ShirtSizes;
    };

    const products: Product[] = [];
    products.push({
        id: 1,
        name: 'Product 1',
        price: 7.5,
        stock: 10,
        size: 'L'
    });

    console.log(products);
}
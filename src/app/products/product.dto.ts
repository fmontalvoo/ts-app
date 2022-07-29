import { Product } from "./product.model";

// Objeto de transferencia de datos.
// export type CreateProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>

// Objetos de transferencia de datos.
export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }

export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
    tags: ReadonlyArray<string>;
}
import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type ShirtSizes = 'L' | 'M' | 'S';

export interface Product extends BaseModel{
    name: string;
    price: number;
    stock: number;
    size?: ShirtSizes;
    category: Category;
};

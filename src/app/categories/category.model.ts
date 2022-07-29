import { BaseModel } from "../base.model";

export interface Category extends BaseModel{
    id: number | string;
    name: string;
}
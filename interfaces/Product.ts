import { Store } from "./Store";

export interface Product {
    title: string,
    price: number,
    imgURL: string,
    url: string,
    unit?: string,
    weight: number
}

export interface ProductWithStore extends Product {
    store: Store
}
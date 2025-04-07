// src/api/dummyapi.ts

import { ProductsResponse, Product } from '../types/types';

const BASE_URL = 'https://dummyjson.com/products';
type ProductSearchParams = {
    limit: number;
    skip: number;

}
export const getAllProducts = async ({limit, skip}: ProductSearchParams): Promise<ProductsResponse> => {
    const params = new URLSearchParams();
    if (limit !== undefined) params.append('limit', String(limit));
    if (skip !== undefined) params.append('skip', String(skip));
    const response = await fetch(`${BASE_URL}?${params}`)
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export const getProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product details');
    }
    return await response.json();
};

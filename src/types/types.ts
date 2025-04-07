export type ReviewsType = {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
}
type DimensionType = {
    width: number,
    height: number,
    depth: number
}
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    minimumOrderQuantity: number;
    availabilityStatus: string;
    shippingInformation: string;
    warrantyInformation: string;
    returnPolicy: string;
    tags: string[];
    images: string[];
    reviews: ReviewsType[];
    dimensions: DimensionType;
    weight: number;
}

export interface ProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}


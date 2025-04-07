import {use} from "react";
import {Product, ProductsResponse} from "../../types/types";
import {ProductItem} from "../product-item/ProductItem";
import "./product-list-layout.css"
import Pagination from "../pagination/Pagination";


type ProductListLayoutProps = {
    productsResponse: Promise<ProductsResponse>
    onPageChange?: (page: number) => void,
    initialPage?: number
}
const ProductListLayout = ({productsResponse, onPageChange, initialPage}: ProductListLayoutProps) => {
    const productListResponse = use(productsResponse);
    return (
       <>
           <div className={"product-list-layout-wrapper"}>
               {
                   productListResponse?.products?.map((product: Product) => {
                       return <ProductItem product={product} key={product.id} />
                   })
               }
               <Pagination
                   totalItems={productListResponse.total}
                   itemsPerPage={productListResponse.limit}
                   initialPage={initialPage}
                   onPageChange={onPageChange}
               />

           </div>
       </>
    )
}
export default ProductListLayout;

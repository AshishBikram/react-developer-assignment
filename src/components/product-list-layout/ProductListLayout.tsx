import {use} from "react";
import {Product, ProductsResponse} from "../../types/types";
import {ProductItem} from "../product-item/ProductItem";
import "./product-list-layout.css"


type ProductListLayoutProps = {
    productsResponse: Promise<ProductsResponse>
}
const ProductListLayout = ({productsResponse}: ProductListLayoutProps) => {
    const productListResponse = use(productsResponse);
    return (
       <>
           <div className={"product-list-layout-wrapper"}>
               {
                   productListResponse?.products?.map((product: Product) => {
                       return <ProductItem product={product} key={product.id} />
                   })
               }
           </div>
       </>
    )
}
export default ProductListLayout;

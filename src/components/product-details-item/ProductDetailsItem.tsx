import {Product} from "../../types/types";
import {use} from "react";
import "./product-details-item.css";
import ImageViewer from "../image-viewer/ImageViewer";
import ProductDetailsInfo from "../product-details-info/ProductDetailsInfo";
import ProductSpecifications from "../product-specifications/ProductSpecifications";
import Reviews from "../reviews/Reviews";

type ProductDetailsItemProps ={
    product: Promise<Product>
}
const ProductDetailsItem = ({product}: ProductDetailsItemProps) => {
    const productDetails = use(product);
    console.log(productDetails);
    return (
        <>
            <div className={"product-details-item-wrapper"}>
                <div className={"product-details-item-container"}>
                    <div className={"product-details-item-header"}>

                        <ImageViewer imageUrl={productDetails.images[0]} title={productDetails.title} availabilityStatus={productDetails.availabilityStatus} />
                        <ProductDetailsInfo productDetails={productDetails} />
                    </div>
                    <br />
                    <ProductSpecifications productDetails={productDetails}/>
                    <br />

                    <Reviews reviews={productDetails.reviews}/>

                </div>

            </div>
        </>
    )
}
export default ProductDetailsItem;
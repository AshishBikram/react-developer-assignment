import {Product} from "../../types/types";
import "./product-details-info.css";
import CategoryBadge from "../category-badge/CategoryBadge";
import Rating from "../rating/Rating";
import ProductPrice from "../product-price/ProductPrice";
import StockInfo from "../stock-info/StockInfo";
import ProductDescription from "../product-description/ProductDescription";

type ProductDetailsInfoProps = {
    productDetails: Product;
}
const ProductDetailsInfo = ({productDetails}: ProductDetailsInfoProps) => {
    return (
        <div className="product-details-info-wrapper">
            <div className="product-details-info-container">
                <div className="product-category-container">
                    {
                        productDetails.tags.map(tag => (
                            <CategoryBadge category={tag} key={tag}></CategoryBadge>
                        ))
                    }
                </div>
                <h1>{productDetails.title}</h1>
                <Rating rating={productDetails.rating} total={5} />
                <ProductDescription description={productDetails.description} />

                <ProductPrice price={productDetails.price} discountPercent={productDetails.discountPercentage}/>

                <StockInfo stock={productDetails.stock} minimumOrderQuantity={productDetails.minimumOrderQuantity}/>

                <button
                    className="product-details-btn"
                >
                    Add to cart
                </button>


            </div>

        </div>
    )
}
export default ProductDetailsInfo
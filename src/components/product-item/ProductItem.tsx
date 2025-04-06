import {Product} from "../../types/types";
import "./product-item.css"
import Rating from "../rating/Rating";
import ProductPrice from "../product-price/ProductPrice";
import CategoryBadge from "../category-badge/CategoryBadge";
import BrandTitle from "../brand-title/BrandTitle";
import StockInfo from "../stock-info/StockInfo";
import {Link} from "react-router-dom";

type ProductItemProps = {
    product:  Product
}
export function ProductItem({ product }: ProductItemProps) {
    return (
        <Link className="product-card" to={`/product/${product.id}`}>
            <div className="thumbnail-container">
                <img
                    src={product.thumbnail || "/placeholder.svg"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="product-thumbnail"
                />
            </div>

            <div className="product-info">
                <div className="product-header">
                    <CategoryBadge category={product.category} />

                    <BrandTitle title={product.title} brand={product.brand} />
                </div>

                <div className="product-details">
                    <Rating rating={product.rating} total={5}/>

                    <ProductPrice price={product.price} discountPercent={product.discountPercentage}/>

                    <StockInfo stock={product.stock} minimumOrderQuantity={product.minimumOrderQuantity}/>
                </div>
            </div>
        </Link>
    )
}
import {Product} from "../../types/types";
import "./product-item.css"
import Rating from "../rating/Rating";
import ProductPrice from "../product-price/ProductPrice";
import CategoryBadge from "../category-badge/CategoryBadge";
import BrandTitle from "../brand-title/BrandTitle";
import StockInfo from "../stock-info/StockInfo";
import {Link} from "react-router-dom";
import ImageViewer from "../image-viewer/ImageViewer";

type ProductItemProps = {
    product:  Product
}
export function ProductItem({ product }: ProductItemProps) {
    return (
        <Link className="product-card" to={`/product/${product.id}`}>

            <ImageViewer imageUrl={product.thumbnail} title={product.title} availabilityStatus={product.availabilityStatus} />
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
import "./product-price.css"
import {useMemo} from "react";
type ProductPriceProps = {
    price: number,
    discountPercent: number
}
const ProductPrice = ({price, discountPercent}: ProductPriceProps) => {
    const discountedPrice = useMemo(() => {
        return (price - (price * Math.abs(discountPercent)/100)).toFixed(2);
    }, [price, discountPercent]);

    return (
        <div className="price-container">
            <span className="original-price">${price}</span>
            <span className="discounted-price">${discountedPrice}</span>
            <span className="discount-badge">-{discountPercent}%</span>
        </div>

    )
}
export default ProductPrice
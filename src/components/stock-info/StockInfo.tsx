import "./stock-info.css";

type StockInfoProps = {
    stock: number
    minimumOrderQuantity: number
}
const StockInfo = ({stock, minimumOrderQuantity}: StockInfoProps) => {
    return (
        <div className="stock-info">
            <span className="stock-count">{stock} in stock</span>
            <span className="min-order">Min order: {minimumOrderQuantity}</span>
        </div>
    )
}
export default StockInfo
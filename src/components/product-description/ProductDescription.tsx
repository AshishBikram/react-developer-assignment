import "./product-description.css";
type ProductDescriptionProps={
    description: string
}
const ProductDescription = ({description}: ProductDescriptionProps) => {
    return (
            <p className="description">{description}</p>
    )
}
export default ProductDescription
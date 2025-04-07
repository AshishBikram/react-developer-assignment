import {Product} from "../../types/types";
import "./product-specification.css"
import TitleSubTitle from "../title-subtitle/TitleSubTitle";
type ProductSpecificationsProps = {
    productDetails: Product
}
const ProductSpecifications = ({productDetails}: ProductSpecificationsProps) => {
    return (
        <div className="product-specifications-wrapper">
            <h3 className={"product-specifications-title"}>Specification</h3>
            <div className={"product-specifications-container"}>
                <TitleSubTitle title={"Weight"} subTitle={`${productDetails.weight} g`}/>
                <TitleSubTitle title={"Dimensions"} subTitle={`${productDetails.dimensions.height} * ${productDetails.dimensions.width} * ${productDetails.dimensions.depth} mm`}/>
                <TitleSubTitle title={"Brand"} subTitle={productDetails.brand}/>
                <TitleSubTitle title={"Return Policy"} subTitle={productDetails.returnPolicy}/>
                <TitleSubTitle title={"Warranty"} subTitle={productDetails.warrantyInformation}/>
            </div>
        </div>
    )
}
export default ProductSpecifications
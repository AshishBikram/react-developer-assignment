import {Link, useParams} from "react-router-dom";
import {getProductById} from "../../api/product.api";
import "./product-details.css"
import ProductDetailsItem from "../product-details-item/ProductDetailsItem";
import {Suspense, useEffect, useRef} from "react";
import Loader from "../loader/Loader";

const ProductDetails  = () => {
    const {id} = useParams()
    const product = getProductById(Number(id));
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [id])
  return (
    <>
        <div className="product-details" ref={ref}>
            <div className={"product-details-header-wrapper"}>
                <h2>Product Details</h2>
                <Link to={`/`} className={"back-btn"}>Back</Link>
            </div>
            <Suspense fallback={<Loader />}>
                <ProductDetailsItem product={product} />
            </Suspense>
        </div>
    </>
  );
};

export default ProductDetails;

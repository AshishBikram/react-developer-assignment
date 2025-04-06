import ProductListLayout from "../product-list-layout/ProductListLayout";
import {getAllProducts} from "../../api/product.api";
import {Suspense} from "react";
import Loader from "../loader/Loader";

const ProductList: React.FC = () => {
  const productResponse = getAllProducts()
  return (
    <div className={"product-list-wrapper"}>
      <h1 className={"title"}>
        Product List
      </h1>
      <Suspense fallback={<Loader />}>
        <ProductListLayout productsResponse={productResponse}/>
      </Suspense>
    </div>
  );
};

export default ProductList;

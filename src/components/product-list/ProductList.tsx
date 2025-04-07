import ProductListLayout from "../product-list-layout/ProductListLayout";
import {getAllProducts} from "../../api/product.api";
import {Suspense} from "react";
import Loader from "../loader/Loader";

const ProductList= () => {
  const productResponse = getAllProducts()
  return (
    <div>
      <h1>
        Product List
      </h1>
      <Suspense fallback={<Loader />}>
        <ProductListLayout productsResponse={productResponse}/>
      </Suspense>
    </div>
  );
};

export default ProductList;

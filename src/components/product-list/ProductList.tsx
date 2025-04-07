import ProductListLayout from "../product-list-layout/ProductListLayout";
import {getAllProducts} from "../../api/product.api";
import {Suspense, useState} from "react";
import Loader from "../loader/Loader";
import {useParams} from "react-router-dom";

const ProductList= () => {
    const [limit, setLimit] = useState<number>(5);
    const [skip, setSkip] = useState<number>(0);
  const productResponse = getAllProducts({
      limit,
      skip,
  })
    const {id} = useParams();
  return (
      <>
          {
              id ?? (
                  <div>
                      <h1>
                          Product List
                      </h1>
                      <Suspense fallback={<Loader />}>
                          <ProductListLayout
                              productsResponse={productResponse}
                              initialPage={(skip / limit) + 1}
                              onPageChange={(n) => {
                              setSkip(limit * (n-1))
                          }}/>
                      </Suspense>

                  </div>
              )
          }
      </>

  );
};

export default ProductList;

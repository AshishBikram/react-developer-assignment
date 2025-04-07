import {BrowserRouter as Router, Routes, Route, useParams, useLocation} from 'react-router-dom';
import ProductList from './components/product-list/ProductList';
import ProductDetails from './components/product-details/ProductDetails';
import ProductNotSelected from "./components/product-not-selected/ProductNotSelected";

const App = () => {

    return (
        <Router>
            <div className={"product-list-container"}>
                {/* Left side: Product details (or placeholder) */}
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Routes>
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="*" element={<ProductNotSelected />} />
                    </Routes>
                </div>


                <div className="product-list-wrapper">
                        <ProductList />
                </div>
            </div>
        </Router>
    );
};

export default App;

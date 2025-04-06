import React, {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/product-list/ProductList';
import ProductDetails from './components/product-details/ProductDetails';
import Loader from "./components/loader/Loader";
import ProductNotSelected from "./components/product-not-selected/ProductNotSelected";

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                {/* Left side: Product details (or placeholder) */}
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Routes>
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="*" element={<ProductNotSelected />} />
                    </Routes>
                </div>

                {/* Right side: Product list */}
                <div style={{ width: '400px', borderLeft: '1px solid #ccc', overflowY: 'auto', padding: '20px' }}>
                    <Suspense fallback={<Loader />}>
                        <ProductList />
                    </Suspense>
                </div>
            </div>
        </Router>
    );
};

export default App;

import {BrowserRouter as Router, Routes, Route, useParams, useLocation} from 'react-router-dom';
import ProductList from './components/product-list/ProductList';
import ProductDetails from './components/product-details/ProductDetails';
import ProductNotSelected from "./components/product-not-selected/ProductNotSelected";

const App = () => {

    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }} className={"product-list-container"}>
                {/* Left side: Product details (or placeholder) */}
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Routes>
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="*" element={<ProductNotSelected />} />
                    </Routes>
                </div>


                <div
                    style={{
                    width: '400px',
                    borderLeft: '1px solid #ccc',
                    overflowY: 'auto',
                    padding: '20px',
                }}>
                        <ProductList />
                </div>
            </div>
        </Router>
    );
};

export default App;

import { useState, useEffect } from 'react'
import './products.css'

export default function UseEffects() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://67f36fdcec56ec1a36d5c7cf.mockapi.io/products");
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }
        getData();
    }, []);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert('Added to cart!');
    };

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="products-container">
            <div className="header">
                <h1 className="products-title">Our Products</h1>
                <div className="cart-count">Cart Items: {cart.length}</div>
            </div>
            <div className="products-grid">
                {products?.map((product) => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={product.img} 
                            className="product-image"
                            alt={product.name} 
                        />
                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <div className="product-price">${product.price}</div>
                            <button 
                                onClick={() => handleAddToCart(product)}
                                className="add-to-cart-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import { useState, useEffect } from 'react'
import './products.css'

export default function UseEffectss() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://67f36fdcec56ec1a36d5c7cf.mockapi.io/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }
        getData();
    }, []); // Added dependency array

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="products-container">
            <h1 className="products-title">Featured Products</h1>
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
                            <div className="product-price">${product.price || '99.99'}</div>
                            <div className="product-rating">
                                {'★'.repeat(Math.floor(Math.random() * 5) + 1)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import React from 'react'
import { useEffect, useState } from 'react';
import './Productslist.css';

function Productslist() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }
        getData();
    }, []);

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div>
            <h1>Products List</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            className="product-image"
                            alt={product.title}
                        />
                        <div className="product-info">
                            <h2 className="product-name">{product.title}</h2>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">
                                {'★'.repeat(Math.round(product.rating.rate))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productslist
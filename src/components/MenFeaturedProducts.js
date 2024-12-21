import React, { useState, useRef, useEffect } from 'react';
import ProductDetails from './FeatureProducts-components/ProductDetails';

function FeaturedProducts() {
    const products = [
        { id: "product1", name: "Product 1", image: "product1.jpg" },
        { id: "product2", name: "Product 2", image: "product2.jpg" },
        { id: "product3", name: "Product 3", image: "product3.jpg" },
        { id: "product4", name: "Product 4", image: "product4.jpg" },
        { id: "product5", name: "Product 5", image: "product5.jpg" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const productsContainerRef = useRef(null);

    const openProductModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const scrollLeft = () => {
        const container = productsContainerRef.current;
        container.scrollLeft -= 320;
    };

    const scrollRight = () => {
        const container = productsContainerRef.current;
        container.scrollLeft += 320;
    };

    // Infinite scroll functionality
    useEffect(() => {
        const container = productsContainerRef.current;

        const handleScroll = () => {
            if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
                container.scrollLeft = 0; // Reset to the start when we reach the end
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="featured-products" id="featured-products">
            <h2>Men's</h2>

            <div className="scroll-buttons">
                <button className="scroll-left" onClick={scrollLeft}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button className="scroll-right" onClick={scrollRight}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>

            <div className="products-container" ref={productsContainerRef}>
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <div className="product-card-btn">
                            <button
                                className="view-details"
                                onClick={() => openProductModal(product)}
                            >
                                View Details
                            </button>
                            <a href="#" className="add-to-cart">Add to Cart</a>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedProduct && (
                <ProductDetails 
                    product={selectedProduct} 
                    closeModal={closeModal} 
                />
            )}
        </section>
    );
}

export default FeaturedProducts;

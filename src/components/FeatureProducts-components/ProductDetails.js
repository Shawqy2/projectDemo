import React, { useEffect } from 'react';

function ProductDetails({ product, closeModal }) {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('product-modal-overlay')) {
                closeModal(); 
            }
        };

        document.addEventListener('keydown', handleEsc);
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closeModal]);

    return (
        <div className="product-modal-overlay">
            <div className="product-modal-content">
            <span className="close-register-btn" onClick={closeModal}>×</span>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <p>Details about {product.name}...</p>
                {/* يمكن إضافة تفاصيل إضافية هنا */}
            </div>
        </div>
    );
}

export default ProductDetails;

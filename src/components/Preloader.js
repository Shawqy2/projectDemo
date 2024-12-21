import React, { useState, useEffect } from "react";
import "../style.css"; // تأكد من أن هذا الملف يحتوي على تنسيق الـ Preloader

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); 
        }, 2000);

        
        return () => clearTimeout(timer);
    }, []);

    return (
        
        isVisible && (
            <div className="preloader">
                <div class="spinner"></div>
            </div>
        )
    );
};

export default Preloader;

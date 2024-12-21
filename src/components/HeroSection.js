import React, { useRef, useState } from "react";

function HeroSection() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const searchInputRef = useRef(null);

    // دالة لتنفيذ البحث
    const handleSearch = () => {
        const searchTerm = searchInputRef.current.value.trim();
        if (searchTerm || selectedCategory) {
            alert(`Searching for: ${searchTerm || "Any"} in Category: ${selectedCategory || "Any"}`);
        } else {
            alert("Please enter a search term or select filters");
        }
    };

    // دالة للتحقق من ضغط مفتاح Enter
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="hero-section">
            <div className="filter">
                <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Type Something..."
                    onKeyDown={handleKeyPress} // الاستماع لحدث ضغط مفتاح Enter
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-filter"
                >
                    <option value="">Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>

                <i
                    className="fas fa-search"
                    onClick={handleSearch} // تنفيذ البحث عند الضغط على الأيقونة
                ></i>

            </div>
        </div>
    );
}

export default HeroSection;

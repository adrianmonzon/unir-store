import { useState } from "react";
import "./styles.css"
import Product from "../../Product/Product";

function Search({ products }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search">
            <input
                className="search__input"
                type="search"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="search__results">
                {filteredProducts.map((el) => (
                    <Product key={el.id} id={el.id} image={el.image} title={el.title} description={el.description} price={el.price} />
                ))}
            </div>
        </div>
    );
}

export default Search;

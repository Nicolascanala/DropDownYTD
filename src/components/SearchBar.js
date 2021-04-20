import React from 'react'

const SearchBar = () => {
    return (
    <>
        <div className="search-bar">
            <h2>Mallorca</h2>
            <input type="text" className="search-bar-input" placeholder="What can we help you find?"></input>
            <button className="cart-button">Cart</button>
        </div>
    </>
    )
}

export default SearchBar

import React from 'react'

const ProductGrid = () => {
    return (
    <>
    <div className="gain-points">Gain points every time you make an order!</div>
        <div>
            <div className="product-container">
                <div className="one">
                    <ul>
                        <li><h1 style={{color: "black", textAlign:"center"}}>Filter By</h1></li>
                        <li><h3>Type</h3></li>
                        <li>Wine</li>
                        <li>Beer</li>
                        <li>Spirits</li>
                        <li>Etc</li>
                    </ul>
                </div>
                <div className="two">Product Display</div>
            </div>
        </div>
    </>
    )
}

export default ProductGrid

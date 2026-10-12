import React from 'react'
import Imagess from "./image/comp.jpeg"
// import './Product. css'

const Product = ({productObj}) => {
 return (
    <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>{console.log(item.image)}
                        <div className="containerCard">
                            <img src={item.image} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikeprice}</strike></div>
                            <button className="buttonShoe">BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )

}
export default Product
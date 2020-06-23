import React from 'react';

const CartItem = (props) => {
    
   
        
        const {price,title, qty} = props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img  style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style = { {fontSize : 25}}>{title}</div>
                    <div style = { {color : '#777'}}>{price}</div>
                    <div style = { {color : '#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons TODO Later*/}
                        <img alt="increase" className = "action-icons" src="https://image.flaticon.com/icons/svg/864/864380.svg"  onClick={()=> onIncreaseQuantity(product)}/>
                        <img alt="decrease" className = "action-icons" src="https://image.flaticon.com/icons/svg/864/864373.svg"  onClick={()=> onDecreaseQuantity(product)}/>
                        <img alt="delete" className = "action-icons" src="https://image.flaticon.com/icons/svg/1345/1345823.svg" onClick ={()=> onDeleteProduct(product.id)}/>
                    </div>
                </div>

            </div>
        );
    }


const styles = {
    image : {
        height : 110,
        width: 70,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;
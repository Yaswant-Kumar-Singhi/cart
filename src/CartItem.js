import React from 'react';

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'phone',
            qty : 1,
            img : ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log('this',this.state);
        // setState form 1 using object
        /*this.setState({
            qty : this.state.qty + 1
        });*/
        //setState form 2 using callback function - if previos state required then use this
        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1
            }
        })
    }

    decreaseQuantity = () =>{
        const {qty} = this.state;

        if(qty === 0)
            return ;

        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1
            }
        })
    }
    render() {
        console.log(this.setState)
        const {price,title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style = { {fontSize : 25}}>{title}</div>
                    <div style = { {color : '#777'}}>{price}</div>
                    <div style = { {color : '#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons TODO Later*/}
                        <img alt="increase" className = "action-icons" src="https://image.flaticon.com/icons/svg/864/864380.svg"  onClick={this.increaseQuantity}/>
                        <img alt="decrease" className = "action-icons" src="https://image.flaticon.com/icons/svg/864/864373.svg"  onClick={this.decreaseQuantity}/>
                        <img alt="delete" className = "action-icons" src="https://image.flaticon.com/icons/svg/1345/1345823.svg" />
                    </div>
                </div>

            </div>
        );
    }
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
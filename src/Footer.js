import React from 'react';

const Footer = (props) => {
        return (
            <div style = {styles.nav}>
                <div style = {styles.cartIconContainer}>
                   
        <span style = {styles.cartCount}>{props.totalCount}</span>
                </div>
            </div>
        )

}


const styles = {
    
    nav : {
        height : 70,
        background : '#4267b2',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    cartIconContainer : {
        position :'relative'
    },
    cartCount : {
        background : 'yellow',
        
        padding : '4px 8px',
        position : 'absolute',
        right : 0,
        top : -9
    }
}

export default Footer;
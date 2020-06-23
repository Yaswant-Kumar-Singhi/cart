import React from 'react';

const Footer = (props) => {
        return (
            <div style = {styles.nav}>
                <h1 style = {{color:'whitesmoke'}}>Total Amont</h1>
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
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    cartIconContainer : {
        position :'relative',
        justifyContent : 'Space-around'
    },
    cartCount : {
        background : 'yellow',
        textHeight : '25px',
        padding : '4px 8px',
        position : 'absolute',
        right : 0,
        top : -9
    }
}

export default Footer;
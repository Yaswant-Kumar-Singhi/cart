import React from 'react';
//import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'
import Footer from  './Footer'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products : [
            {
                price : 99,
                title : 'Watch',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                id : 1
            },
            {
                price : 999,
                title : 'phone',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                id : 2
            },
            {
                price : 999,
                title : 'Laptop',
                qty : 4,
                img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id : 3 
            }
        ]
    }
   // this.increaseQuantity = this.increaseQuantity.bind(this);
}
handleIncreaseQuantity = (product) => {
    console.log('Increasing', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;
    
    this.setState({
        products : products
    })
}

handleDecreaseQuantity = (product) => {
    console.log('Increasing', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
        return
    else
        products[index].qty -=1;
    
    this.setState({
        products : products
    })
}

handleDeleteProduct = (id)=> {
    const {products} = this.state;

    const items = products.filter((items) => items.id !== id);

    this.setState({
        products : items
    })
}

getCartCount = ()=>{
  const {products} = this.state;

  let count = 0;

  products.forEach(products => {
    count += products.qty
    
  });

  return count;

}

getCartValue = () =>{

  const {products} = this.state;

  let count = 0;

  products.forEach(products => {
    
    count += products.price * products.qty
    
  });

  return count;

}
  
  render() {
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      <Footer 
       totalCount = {this.getCartValue()}      
      />
     </div>
  );
}
}

export default App;

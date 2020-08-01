import React from 'react';
//import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'
import Footer from  './Footer'
import * as firebase from 'firebase';

class App extends React.Component {
  constructor () {
    super(); //basically it calls the constructor from the component
    this.state = {
        products : [],
        loading : true
    }
   // this.increaseQuantity = this.increaseQuantity.bind(this);
}

componentDidMount(){
  firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading:false
      })

    })

    
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
  //required method when creating class. Creats UI
  //Render function is a pure fuction. 
  render() {
    const {products,loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      {loading && <h1>Loading products</h1>}
      <Footer 
       totalCount = {this.getCartValue()}      
      />
     </div>
  );
}
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products: [
            {
                title: 'Mobile Phone',
                price: '69',
                qty: 1,
                id: 1,
                img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
            },
            {
                title: 'Watch',
                price: '78',
                qty: 1,
                id: 2,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHx3YXRjaHxlbnwwfHx8fDE2NDY4NTc2MjQ&ixlib=rb-1.2.1&q=80&w=1080'
            },
            {
                title: 'Laptop',
                price: '65000',
                qty: 1,
                id: 3,
                img:'https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?s=612x612'
            }
        ]
    }
}
handleIncreaseQuantity = (product)=>{
      console.log("Hey increase the quantity of ",product);
      const products = this.state.products;
      let index = products.indexOf(product);
      products[index].qty+=1;
      this.setState(prevState=>{
          return {
              products: products
          }
      })
}
handleDecreaseQuantity = (product)=>{
    console.log("Hey decrease the quantity of ", product);
    const products = this.state.products;
    let index = products.indexOf(product);

    if(products[index].qty>0)
    products[index].qty-=1;
    else return;

    this.setState({
        products
    });
}
handleDeleteProduct = (productId)=>{
    this.setState((prevState)=>{
        return {
            products: prevState.products.filter((item)=>item.id!=productId)
        }
    })
}
getCartCount = ()=>{
  const products = this.state.products;
  let count = 0;
  
  products.forEach((product)=>{
    count+=product.qty;
  });

  return count;
}
getCartTotal = ()=>{
  const {products} = this.state;
  let CartTotal = 0;
  products.map((product)=>{CartTotal+=(product.qty*product.price)});
  return CartTotal;
}

  render(){
    const {products} = this.state;
  return (
     <>
     <Navbar
       count={this.getCartCount()}
     />
     <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
     />
     <div style={{fontSize:30,padding:10}}> 
       Total Price : {this.getCartTotal()}
     </div>
     </>
  );
  }
}

export default App;

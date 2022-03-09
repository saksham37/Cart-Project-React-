import React from 'react'
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Mobile Phone',
                    price: '69',
                    qty: 1,
                    id: 1
                },
                {
                    title: 'Watch',
                    price: '78',
                    qty: 1,
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: '65000',
                    qty: 1,
                    id: 3
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
    render(){
        const {products} = this.state;
        return(
            <>
              <div className='cart'> 
                  {products.map(product=>{
                      return (
                         <CartItem
                          product = {product}
                          key={product.id}
                          onIncreaseQuantity={this.handleIncreaseQuantity}
                          onDecreaseQuantity={this.handleDecreaseQuantity}
                        />
                      ) 
                  })}
              </div>
            </>
        );
    }
}

export default Cart;
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
                        />
                      ) 
                  })}
              </div>
            </>
        );
    }
}

export default Cart;
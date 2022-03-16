// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';


const CartItem = (props)=>{
    //for a class component to be a react component, we need one method -- render()
        const {title, price, qty} = props.product;
        const {product,
               key,
               onIncreaseQuantity,
               onDecreaseQuantity,
               onDeleteProduct
            } = props;
            console.log(onIncreaseQuantity);
        return (
            <>
              <div className='cart-item'>
                  <div className='left-block'>
                      <img src={product.img} style={styles.image}/>                      
                  </div>
                  <div className='right-block'>
                      <div style={{fontSize:25}}>{title}</div>
                      <div style={ { color: '#777'}}>Rs {price}</div>
                      <div id = "quantity" style={ { color: '#777'}}>Qty: {qty}</div>
                  </div>
                  <div className='cart-item-actions'>
                       {/* {Button} */}
                       <img
                        alt='increase' 
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick={()=>{onIncreaseQuantity(product)}}
                        />
                       <img
                        alt='decrease'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={()=>{onDecreaseQuantity(product)}}
                        />
                       <img
                        alt='delete'
                         className='action-icons'
                          src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png'
                          onClick={()=>{onDeleteProduct(product.id)}}
                        />
                        
                  </div>
                  
              </div>
            </>
        )

}
//in jsx we cannot style our elements like in normal html, we will style our elements using objects

const styles = {
    image:{
        height: 110,
        width: 110,
        broderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;
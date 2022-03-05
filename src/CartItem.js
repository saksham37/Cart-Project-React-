import React from 'react';

class CartItem extends React.Component{
    // we need to make a constructor to define the state
    constructor(){
        super();
        this.state = {
            title: 'Mobile Phone',
            price: '69',
            qty: '1'
        }
    }
    //for a class component to be a react component, we need one method -- render()
    render(){
        const {title, price, qty} = this.state;
        return (
            <>
              <div className='cart-item'>
                  <div className='left-block'>
                      <img style={styles.image}/>                      
                  </div>
                  <div className='right-block'>
                      <div style={{fontSize:25}}>{title}</div>
                      <div style={ { color: '#777'}}>Rs {price}</div>
                      <div style={ { color: '#777'}}>Qty: {qty}</div>
                  </div>
                  <div className='cart-item-actions'>
                       {/* {Button} */}
                       <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992651.png'></img>
                       <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png'></img>
                       <img alt='increase' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1646485732~hmac=ee9f0276fc1235bea31d9ec3ad26098a'></img>
                        
                  </div>
                  
              </div>
            </>
        )
    }
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
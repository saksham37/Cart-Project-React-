import React from 'react';

class CartItem extends React.Component{
    //for a class component to be a react component, we need one method -- render()
    render(){
        return (
            <>
              <div className='cart-item'>
                  <div className='left-block'>
                      <img style={styles.image}/>                      
                  </div>
                  <div className='right-block'>
                      <div style={{fontSize:25}}>Phone</div>
                      <div style={ { color: '#777'}}>Rs999</div>
                      <div style={ { color: '#777'}}>Qty:1</div>
                  </div>
                  <div className='cart-item-actions'>
                       {/* {Button} */}
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
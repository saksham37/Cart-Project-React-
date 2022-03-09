import React from 'react';

const Navbar = (props)=>{
       return (
           <div style={styles.nav}>
               <div style={styles.cartIconContainer}>
                   <img style={styles.cartIcon} src='https://cdn-icons.flaticon.com/png/512/3145/premium/3145827.png?token=exp=1646856014~hmac=424ef301756a5b527648b76188667c5f' alt='cart-icon'/>
                   <span style={styles.cartCount}>{props.count}</span>
               </div>
           </div>
       );
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

  export default Navbar;
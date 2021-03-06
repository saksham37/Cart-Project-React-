import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import {db} from './firebase';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products: [],
        loading:true
    }
}

componentDidMount() {
    db
    .collection("Products")
    .onSnapshot(snapshot => {

      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ products: products, loading: false });
    });
}
handleIncreaseQuantity = (product)=>{
      console.log("Hey increase the quantity of ",product);
      const products = this.state.products;
      let index = products.indexOf(product);
      // products[index].qty+=1;
      // this.setState(prevState=>{
      //     return {
      //         products: products
      //     }
      // })
      //we will update the quantity in the firebase which will automaticall setState() and cause a re-render
      const docRef = db
                    .collection('Products')
                    .doc(products[index].id);
      
      docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(()=>{
        console.log("Document updated successfully");
      })
      .catch((err)=>{
        console.log("Error",err);
      });
}
handleDecreaseQuantity = (product)=>{
    console.log("Hey decrease the quantity of ", product);
    const products = this.state.products;
    let index = products.indexOf(product);

    if(products[index].qty===0)
    return;

    // this.setState({
    //     products
    // });
    const docRef = db.collection('Products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty-1
    })
    .then(()=>{
      console.log("Document updated successfully");
    })
    .catch((err)=>{
      console.log("Error",err);
    });
}
handleDeleteProduct = (productId)=>{
    // this.setState((prevState)=>{
    //     return {
    //         products: prevState.products.filter((item)=>item.id!=productId)
    //     }
    // })
    const docRef = db.collection('Products').doc(productId);

    docRef
    .delete()
    .then(()=>{
      console.log("Document Deleted successfully");
    })
    .catch((err)=>{
      console.log("Error",err);
    });
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
addProduct = ()=>{
  db
  .collection('Products')
  .add({
    img: '',
    price: 999,
    qty: 4,
    title: "Washing Machine",
  })
  .then((docRef)=>{
    console.log("Product has been added",docRef);
  })
  .catch((error)=>{
    console.log("Error",error);
  });
}
  render(){
    const {products,loading} = this.state;
  return (
     <>
     <Navbar
       count={this.getCartCount()}
     />
     {loading && <div>Loading Products...</div>}
      <button onClick={this.addProduct} style={{padding:15,fontSize:25}}> Add Product </button>
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

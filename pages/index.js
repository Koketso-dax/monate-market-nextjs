import React, { useState, useEffect } from "react";
import commerce  from "../public/lib/commerce.js";
import {Products, Navbar, Cart, Checkout} from "../components";
import {ThemeProvider } from "@material-ui/core";
import theme from "../public/theme";
import Link from 'next/Link';
import Script from 'next/script'


function Index(){

  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  const fetchProducts = async () => {
    const data  = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };



  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, quantity);

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    setCart(cart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
    useEffect(() => {

    fetchProducts();

    fetchCart();

  }, []);

  return(
    <ThemeProvider theme = {theme}>
      
      <Navbar/>

      <Script src="https://js.stripe.com/v3/"/>
        
        <Link href="/">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Link>

        <Link href="/cart">
        <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}/>  
        </Link>

        <Link href="/checkout">
          <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
        </Link>

      </ThemeProvider>

  );
}

export default Index;
import React, { useState, useEffect } from "react";
import commerce  from "../public/lib/commerce";
import { Products, Navbar, Cart, Checkout } from "../components";
import { ThemeProvider } from "@material-ui/core";
import theme from "../public/theme";
import {useRouter} from 'next/router';
import Link from 'next/Link';
import Head from "../components/head";


function Index(){

  
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
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
    const { cart } = await commerce.cart.update(productId, { quantity });

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
    const newCart = await commerce.cart.refresh();

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
    <div>
      <Head/>
      <ThemeProvider theme = {theme}>

        <Navbar totalItems={cart.total_items} />
        
        
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
    </div>

  );
}

export default Index;
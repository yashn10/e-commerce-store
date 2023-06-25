import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState()
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error, "error")
      localStorage.clear()
    }

  }, [])


  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart)
    let subt = 0
    let keys = Object(keys).cart
    for (let i = 0; i < keys.length; i++) {
      subt = myCart[keys[i]].price + myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }

    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart)
    saveCart(newCart)
  }

  return (

    <>
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} />
      <Footer />
    </>

  )
}

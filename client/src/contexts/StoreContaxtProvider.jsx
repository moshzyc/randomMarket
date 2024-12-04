import React, { createContext, useEffect, useState } from 'react'
export const StoreContext = createContext()
export const StoreContaxtProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartSum, setCartSum] = useState(0)
  const SAVE = 0.5
  const roundToTwo = (num) => {
    return Math.round(num * 100) / 100
  }
  useEffect(() => {
    const sortedData = localStorage.getItem("cart")
    const itemsArrey = sortedData ? JSON.parse(sortedData) : []
    setCart(itemsArrey)
    const totalSum = itemsArrey.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    )
    setCartSum(totalSum)
  }, [])
  const addItem = (item) => {
    let exist = false
    cart.forEach((element) => {
      element.title === item.title &&
        roundToTwo((element.price += item.price)) &&
        (element.amount += item.amount) &&
        (exist = true)
    })
    const newCart = [...cart]
    !exist && newCart.push(item)
    setCart(newCart)
    setCartSum(roundToTwo(cartSum + item.price))
    // console.log(item.price-item.price*SAVE);
    const sortedData = localStorage.getItem("cart")
    const existingitem = sortedData ? JSON.parse(sortedData) : []

    exist = false
    existingitem.forEach((element) => {
      element.title === item.title &&
        roundToTwo((element.price += item.price)) &&
        (element.amount += item.amount) &&
        (exist = true)
    })

    !exist && existingitem.push(item)

    localStorage.setItem("cart", JSON.stringify(existingitem))
  }
  const deletItem = (number) => {
    setCartSum(roundToTwo(cartSum - cart[number - 1].price))
    const newCart = cart.filter((item, index) => index + 1 != number)
    setCart(newCart)
    if ([...cart]) localStorage.setItem("cart", JSON.stringify(newCart))
    else localStorage.clear()
  }
  const minusAmount = (number) => {
    if (cart[number - 1].amount > 1) {
      setCartSum(
        roundToTwo(cartSum - cart[number - 1].price / cart[number - 1].amount)
      )
      cart[number - 1].price -= roundToTwo(
        cart[number - 1].price / cart[number - 1].amount
      )
      cart[number - 1].amount--
      const newCart = [...cart]
      setCart(newCart)
      if ([...cart]) localStorage.setItem("cart", JSON.stringify(newCart))
      else localStorage.clear()
    } else {
      setCartSum(roundToTwo(cartSum - cart[number - 1].price))
      const newCart = cart.filter((item, index) => index + 1 != number)
      setCart(newCart)
      if ([...cart]) localStorage.setItem("cart", JSON.stringify(newCart))
      else localStorage.clear()
    }
  }
  const addAnother = (number) => {
    setCartSum(
      roundToTwo(cartSum + cart[number - 1].price / cart[number - 1].amount)
    )
    cart[number - 1].price += roundToTwo(
      cart[number - 1].price / cart[number - 1].amount
    )
    cart[number - 1].amount++
    const newCart = [...cart]
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }
  return (
    <StoreContext.Provider
      value={{
        SAVE,
        cart,
        cartSum,
        setCartSum,
        setCart,
        addItem,
        deletItem,
        roundToTwo,
        minusAmount,
        addAnother,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

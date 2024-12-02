import { createContext, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export const StoreContext = createContext()
import "./App.css"
import axios from "axios"
import ScrollToTop from "./components/ScrollToTop"
import HomePage from "./pages/HomePage"
import Market from "./pages/Market"
import AboutUs from "./pages/AboutUs"
import Cart from "./pages/Cart"
import ContactUs from "./pages/ContactUs"
import Product from "./pages/Product"
import Header from "./components/Header"
import SignupPage from "./pages/SingupPage"
import LoginPage from "./pages/LoginPage"
import MarketRnd from "./pages/MarketRnd"
import { GET_INFO_URL } from "./constants/endPoint"
import { Admin } from "./pages/Admin"
import { MarketDady } from "./components/MarketDady"
axios.defaults.withCredentials = true
function App() {
  const [cart, setCart] = useState([])
  const [cartSum, setCartSum] = useState(0)
  let [user, setUser] = useState(null)
  const [admin, setAdmin] = useState("");
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

  useEffect(() => {
    console.log(user)
    
  }, [user])
 
  
  useEffect(() => {
    checkIfUserConnected()
  }, [])
  const checkIfUserConnected = async () => {
    try {
      const { data } = await axios.get(GET_INFO_URL)

      setUser(data)
      setAdmin(data.role)
    } catch (error) {}
  }

  const addItem = (item) => {
    const newCart = [...cart]
    newCart.push(item)
    setCart(newCart)
    setCartSum(roundToTwo(cartSum + item.price))
    // console.log(item.price-item.price*SAVE);
    const sortedData = localStorage.getItem("cart")
    const existingitem = sortedData ? JSON.parse(sortedData) : []

    existingitem.push(item)

    localStorage.setItem("cart", JSON.stringify(existingitem))
  }
  // user?setCartSum(roundToTwo(cartSum + item.price-item.price*SAVE)):setCartSum(roundToTwo(cartSum + item.price));
  const deletItem = (number) => {
    if (window.confirm("are you sure you want delete this very cool item?")) {
      const newCart = cart.filter((item, index) => index + 1 != number)
      setCart(newCart)
      if ([...cart]) localStorage.setItem("cart", JSON.stringify(newCart))
      else localStorage.clear()
    }
  }
  return (
    <>
      <StoreContext.Provider
        value={{
          SAVE,
          user,
          admin,
          setUser,
          cart,
          cartSum,
          setCartSum,
          addItem,
          deletItem,
          roundToTwo,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {!user && <Route path="/singup" element={<SignupPage />} />}
            {!user && <Route path="/login" element={<LoginPage />} />}
            {admin == "admin" && <Route path="/admin" element={<Admin />} />}
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/market" element={<MarketDady />}>
              <Route index element={<Market />} />
              <Route path="marketRnd" element={<MarketRnd />} />
            </Route>
            {/* <Route path="sahiMarket" element={<Market />} /> */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <div>
                    <h1 className="page404">אין לך גישה לדף הזה!!</h1>
                  </div>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </StoreContext.Provider>
    </>
  )
}

export default App

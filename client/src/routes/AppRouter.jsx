import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SingupPage'
import LoginPage from '../pages/LoginPage'
import { Admin } from '../pages/Admin'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import { MarketDady } from '../components/MarketDady'
import MarketRnd from '../pages/MarketRnd'
import Market from '../pages/Market'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Header from '../components/Header'
import { StoreContaxtProvider } from '../contexts/StoreContaxtProvider'
import { UserContext } from '../contexts/UserContextpProvider'

const AppRouter = () => {
    const { user, admin } = useContext(UserContext)
  return (
    <StoreContaxtProvider>
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
    </StoreContaxtProvider>
  )
}

export default AppRouter
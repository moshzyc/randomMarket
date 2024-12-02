import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <main>
        <div className="mycontainer">
          <div className="home">
            <div onClick={() => navigate("/market")} className="hcard">
              <i className="bi bi-shop homeIcons"></i>
              <p>לחנות</p>
            </div>
            <div
              onClick={() => navigate("/market/marketRnd")}
              className="hcard"
            >
              <i className="bi bi-shop homeIcons text-danger"></i>
              <p>לחנות הרנדומלית</p>
            </div>
            <div onClick={() => navigate("/aboutUs")} className="hcard">
              <i className="bi bi-info-circle homeIcons text-info"></i>
              <p>אודות</p>
            </div>
            <div onClick={() => navigate("/cart")} className="hcard">
              <i className="bi bi-cart4 homeIcons text-success"></i>
              <p>לעגלת קניות</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage

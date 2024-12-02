import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { NavLink, Outlet, useLocation } from "react-router-dom"

export const MarketDady = () => {
  const [active, setActive] = useState(1)
  useEffect(() => {
    if (isActive) setActive(2)
  }, [])
  const isActive = location.pathname.startsWith("/market/marketRnd")

  return (
    <>
      <Header />
      <div className="mycontainer mNav">
        <nav className="marketNav">
          <NavLink
            onClick={() => {
              setActive(1)
              // console.log("acvive")
            }}
            to="/market"
            className={`mNavLink ${active == 1 && "mNavActiv"}`}
          >
            חנות סחית
          </NavLink>
          <NavLink
            onClick={() => {
              setActive(2)
              // console.log("acvive")
            }}
            to="/market/marketRnd"
            onLoad={() => setActive(2)}
            className={`mNavLink ${active == 2 && "mNavActiv"}`}
          >
            חנות רנדומלית
          </NavLink>
        </nav>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

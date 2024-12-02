import React, { useContext } from "react"
import { StoreContext } from "../App"
import { NavLink, useNavigate } from "react-router-dom"
import { LOGOUT_URL } from "../constants/endPoint"
import axios from "axios"

const Header = () => {
  const { user, setUser, admin } = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <header>
      <div className="mycontainer header">
        <img
          onClick={() => navigate("/")}
          className="headLogo"
          src="./src/assets/photos/large.png"
          alt=""
        />
        <h1 className="headerh1">סתם חנות רנדומלית</h1>
        <nav className="headNav">
          <NavLink className={"hNavLink"} to={"/"}>
            דף הבית
          </NavLink>
          {!user && (
            <NavLink className={"hNavLink"} to={"/singup"}>
              הירשם
            </NavLink>
          )}
          {!user && (
            <NavLink className={"hNavLink"} to={"/login"}>
              התחבר
            </NavLink>
          )}
          {admin == "admin" && (
            <NavLink className={"hNavLink"} to={"/admin"}>
              ניהול
            </NavLink>
          )}
          <NavLink className={"hNavLink"} to={"/market"}>
            חנות
          </NavLink>
          <NavLink className={"hNavLink"} to={"/cart"}>
            עגלת קניות
          </NavLink>
          <NavLink className={"hNavLink"} to={"/aboutUs"}>
            אודות
          </NavLink>
          <NavLink className={"hNavLink"} to={"/contactUs"}>
            צור קשר
          </NavLink>
          {user && (
            <button
              onClick={async () => {
                await axios.get(LOGOUT_URL)
                setUser(null)
                navigate("/")
                // location.reload()
              }}
              className="btnDelete"
            >
              התנתק
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

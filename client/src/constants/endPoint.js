const BASE_URL = "http://localhost:3000/"
const USER_URL = BASE_URL + "user/"

const SIGNUP_URL = USER_URL + "signup"
const LOGIN_URL = USER_URL + "login"
const LOGOUT_URL = USER_URL + "logout"
const GET_INFO_URL = USER_URL + "info"
const PRODUCTS_URL = BASE_URL + "products"
const PRODUCTS_CATEGORIES_URL = PRODUCTS_URL + "/categories"


export {
  SIGNUP_URL,
  LOGIN_URL,
  GET_INFO_URL,
  LOGOUT_URL,
  PRODUCTS_URL,
  PRODUCTS_CATEGORIES_URL,
}

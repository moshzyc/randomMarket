import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { PRODUCTS_URL, PRODUCTS_CATEGORIES_URL } from "../constants/endPoint"
import { StoreContext } from "../App"
import axios from "axios"
const MarketRnd = () => {
  const [products, setProducts] = useState([])
  const [categories, setcategories] = useState([])
  const [currentArr, setCurrentArr] = useState([])
  const [saveArr, setSaveArr] = useState([])
  const [category, setCateroy] = useState("")
  const { user } = useContext(StoreContext)

  const getProdact = async () => {
    try {
      const DATA_URL = PRODUCTS_URL
      const res = await fetch(DATA_URL)
      if (!res.ok) {
        throw new Error(`client fetch error with status ${res.status}`)
      }
      const data = await res.json()
      console.log(data)

      setProducts(data)
      setCurrentArr(data)
    } catch (error) {
      console.error(error)
    }
  }
  const getCategories = async () => {
    const { data } = await axios.get(PRODUCTS_CATEGORIES_URL)
    setcategories(data)
    setCateroy(data[0].category)
  }
  useEffect(() => {
    getProdact()
    getCategories()
  }, [])

  const cardsGenerator = (arr) => {
    const cardsArray = arr.map((item, index) => {
      return (
        <Card
          pic={item.image}
          title={item.title}
          category={item.category}
          description={item.description}
          price={item.price}
          key={item._id}
        />
      )
    })
    return cardsArray
  }
  const categoriesGenerator = (arr) => {
    const categoriesArrey = arr.map((item, index) => {
      return (
        <option key={item._id} value={item.category}>
          {item.category}
        </option>
      )
    })
    return categoriesArrey
  }
  const filterCtegory = (value) => {
    const filterCtegorylArr = products.filter((item) => {
      return item.category.toLowerCase() == value.toLowerCase()
    })
    return filterCtegorylArr
  }

  return (
    <>
      <main>
        <div className="mycontainer text-center">
          <label htmlFor="categorys">קטגוריות</label>
          <select
            className="rounded-4 m-1"
            onChange={(e) => setCateroy(e.target.value)}
            name="categorys"
            id=""
          >
            {categoriesGenerator(categories)}
          </select>
          <button
            onClick={() => {
              setCurrentArr(filterCtegory(category))
              setSaveArr(filterCtegory(category))
            }}
            className="categoryBtn"
          >
            החל
          </button>
          <span> </span>
          <button
            onClick={() => {
              setCurrentArr(products)
              setSaveArr(products)
            }}
            className="categoryBtn"
          >
            לכל המוצרים
          </button>
        </div>
        <div className="mycontainer">
          <div className="store">{cardsGenerator(currentArr)}</div>
        </div>
      </main>
    </>
  )
}

export default MarketRnd

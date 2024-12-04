import React, { useEffect, useState } from "react"
import Card from "../components/Card"
const Market = () => {
  const [products, setProducts] = useState([])
  const [currentArr, setCurrentArr] = useState([])
  const [saveArr, setSaveArr] = useState([])
  const [category, setCateroy] = useState("men's clothing")

  const getProdact = async () => {
    try {
      const DATA_URL = "https://fakestoreapi.com/products"
      const res = await fetch(DATA_URL)

      if (!res.ok) {
        throw new Error(`client fetch error with status ${res.status}`)
      }
      const data = await res.json()
      console.log(data);

      setProducts(data)
      setCurrentArr(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getProdact()
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
          key={item.id}
        />
      )
    })
    return cardsArray
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
            className="selectCatrgory"
            onChange={(e) => setCateroy(e.target.value)}
            name="categorys"
            id=""
          >
            <option className="categoryOption" value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
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

export default Market

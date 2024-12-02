import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { PRODUCTS_URL } from "../constants/endPoint"
import axios from "axios"
export const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    rating: "",
  })
const onSubmit = async (e) => {
  e.preventDefault()

  try {
      await axios.post(PRODUCTS_URL, formData)
      console.log(formData)
  } catch (error) {
    alert(error)
  }
}
  return (
    <>
      <Header />
      <main>
        <div className="mycontainer">
          <h1 className="formTitles text-center">טופס העלאת מוצר</h1>
          <form onSubmit={onSubmit} className="addForms">
            <div>
              <label htmlFor="title">כותרת:</label>
              <input
                className="formsInputs"
                type="text"
                id="title"
                name="title"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value.replace("@", ""),
                  })
                }
                value={formData.title}
                required
              />
            </div>
            <div>
              <label htmlFor="description">תיאור:</label>
              <textarea
                className="formsInputs"
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="price">מחיר:</label>
              <input
                className="formsInputs"
                type="number"
                id="price"
                name="price"
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="category">קטגוריה:</label>
              <input
                className="formsInputs"
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="image">תמונה (URL):</label>
              <input
                className="formsInputs"
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                className="formsInputs"
                type="number"
                id="rating"
                name="rating"
                step="0.1"
                min="0"
                max="5"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <button className="fomBtn m-2" type="submit">
              העלה מוצר
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

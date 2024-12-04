import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SIGNUP_URL } from "../constants/endPoint"
import { LOGIN_URL } from "../constants/endPoint"
import { UserContext } from "../contexts/UserContextpProvider"

// ure mail: john4@gmail.com
// admin mail: john3@gmail.com
export default function Form({ isSignup }) {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [formValues, setFormValues] = useState({
    name: " ",
    email: " ",
    password: " ",
    birthDate: " ",
  })
  useEffect(() => {
    if (!isSignup) {
      setFormValues({
        email: "",
        password: "",
      })
    }
  }, [isSignup])

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isSignup) {
        await axios.post(SIGNUP_URL, formValues)
        console.log(formValues)
        navigate("/login")
      } else {
        const { data } = await axios.post(LOGIN_URL, formValues)
        setUser(data)
        navigate("/market")
        location.reload()
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={onSubmit} className="forms">
      {error && <span className="bg-red-500 rounded-md w-full">{error}</span>}

      {/* name */}

      {isSignup && (
        <div>
          <label htmlFor="name" className="mr-2">
            שם:
          </label>
          <input
            name="name"
            className="formsInputs"
            id="name"
            type="text"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value.replace("@", ""),
              })
            }
          />
        </div>
      )}

      {/* email */}
      <div>
        <label htmlFor="email" className="mr-2">
          מייל:
        </label>
        <input
          name="email"
          className="formsInputs"
          id="email"
          type="email"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>
      {/* password */}
      <div>
        <label htmlFor="password" className="text-left mr-2 w-1/4">
          סיסמה:
        </label>
        <input
          name="password"
          className="formsInputs"
          id="password"
          type="password"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>

      {/* age */}
      {isSignup && (
        <div>
          <label htmlFor="age" className="text-left mr-2 w-1/4">
            תאריך לידה:
          </label>
          <input
            name="birthDate"
            className="formsInputs"
            id="birthDate"
            type="date"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
      )}
      <button type="submit" className="fomBtn">
        {isSignup ? "הירשם" : "התחבר"}
      </button>
    </form>
  )
}

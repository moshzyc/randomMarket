import React, { useContext } from 'react'
import TableRow from './TableRow'
import { UserContext } from '../contexts/UserContextpProvider'
import { StoreContext } from '../contexts/StoreContaxtProvider'

export const Order = ({exit}) => {
    const {
      SAVE,
      deletItem,
      setCart,
      setCartSum,
      cartSum,
      cart,
      roundToTwo,
      minusAmount,
      addAnother,
    } = useContext(StoreContext)
const { user } = useContext(UserContext)
     const tableRowGenerator = () => {
       const tableRowArr = cart.map((item, index) => {
         return (
           <TableRow
             key={index}
             number={index + 1}
             title={item.title}
             category={item.category}
             amount={item.amount}
             price={item.price}
             isOrder
           />
         )
       })
       return tableRowArr
     }
  return (
    <>
      <main className="orderOverlay">
        <div className="order">
          <button onClick={exit} className="exitBtn">
            x
          </button>
          <table className="mt-2 me-2">
            <thead>
              <tr>
                <th>שם המוצר</th>
                <th>קטגוריה</th>
                <th>כמות</th>
                <th>מחיר</th>
              </tr>
            </thead>
            <tbody>
              {tableRowGenerator()}
              <TableRow
                number=" "
                title="סה''כ לתשלום"
                category=" "
                price={cartSum}
                isOrder
              />
            </tbody>
          </table>
          <form action="" className="forms m-auto mt-4 w-50">
            <h2 className="formTitles text-center">פרטי אשראי</h2>
            <h5 className="text-danger text-center m-0">
              אל תשים פרטים אמיתיים
            </h5>
            <label htmlFor="credit">מספר אשראי:</label>
            <input
              className="formsInputs"
              type="text"
              id="credit"
              name="credit"
            />
            <label htmlFor="validity">מספר אשראי:</label>
            <input
              className="formsInputs"
              type="text"
              id="validity"
              name="validity"
            />
            <label htmlFor="cvv">cvv:</label>
            <input className="formsInputs" type="text" id="cvv" name="cvv" />
            <br />
            <h2 className="formTitles text-center">פרטי משלוח</h2>

            {!user && (
              <>
                <label htmlFor="name">שם:</label>
                <input
                  className="formsInputs"
                  type="text"
                  id="name"
                  name="name"
                />
              </>
            )}

            <label htmlFor="validity">כתובת:</label>
            <input
              className="formsInputs"
              type="text"
              id="validity"
              name="validity"
            />

            {!user && (
              <>
                <label htmlFor="cvv">אימייל:</label>
                <input
                  className="formsInputs"
                  type="text"
                  id="cvv"
                  name="cvv"
                />
              </>
            )}
            <br />
            <button onClick={()=>{
                 setCart([])
                 setCartSum(0)
                 localStorage.clear("cart")
            }} className="fomBtn">השלם משלוח</button>
          </form>
        </div>
      </main>
    </>
  )
}

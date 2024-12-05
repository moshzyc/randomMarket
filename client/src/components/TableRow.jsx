import { useContext } from "react"
import { UserContext } from "../contexts/UserContextpProvider"
import { StoreContext } from "../contexts/StoreContaxtProvider"

const TableRow = ({ isOrder, number, title, category, amount, price }) => {
  const {
    SAVE,
    deletItem,
    setCart,
    setCartSum,
    roundToTwo,
    minusAmount,
    addAnother,
  } = useContext(StoreContext)
  const { user } = useContext(UserContext)

  const calculatePrice = () => roundToTwo(price - (user ? price * SAVE : 0))

  const handleDeleteClick = () => {
    if (category === " " && window.confirm("אתה בטוח רוצה למחוק הכל?")) {
      setCart([])
      setCartSum(0)
      localStorage.clear("cart")
    } else {
      deletItem(number)
    }
  }

  const isProductRow = category && category.trim() !== "" && category !== "ריק"

  return (
    <tr>
      {!isOrder && <th>{number}</th>}
      <th>{title}</th>
      <th>{category}</th>
<th className={`${isOrder ? "" : "amountTh"}`}>
  <div className="amount">
    {!isOrder && isProductRow && (
      <>
        <button onClick={() => addAnother(number)} className="plusMinusBtn">
          +
        </button>
      </>
    )}
    {amount}
    {!isOrder && isProductRow && (
      <>
        <button onClick={() => minusAmount(number)} className="plusMinusBtn">
          -
        </button>
      </>
    )}
  </div>
</th>

      <th>{calculatePrice()}</th>
      {!isOrder && (
        <th>
          {isProductRow && (
            <button className="btnDelete" onClick={handleDeleteClick}>
              הסר
            </button>
          )}
          {!isProductRow && category === " " && (
            <button className="btnDelete" onClick={handleDeleteClick}>
              נקה עגלה
            </button>
          )}
        </th>
      )}
    </tr>
  )
}

export default TableRow

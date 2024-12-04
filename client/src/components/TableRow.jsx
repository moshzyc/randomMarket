import React, { useContext } from "react"
import { StoreContext } from "../contexts/StoreContaxtProvider"
import { UserContext } from "../contexts/UserContextpProvider"

const TableRow = (props) => {
  const {
    SAVE,
    deletItem,
    setCart,
    setCartSum,
    cartSum,
    roundToTwo,
    minusAmount,
    addAnother,
  } = useContext(StoreContext)
  const { user, admin } = useContext(UserContext)

  return (
    <tr>
      <th>{props.number}</th>
      <th>{props.title}</th>
      <th>{props.category}</th>
      {(props.category != "ריק" && props.category != " " && (
        <th className="amountTh">
          <div className="amount">
            <button
              onClick={() => {
                addAnother(props.number)
              }}
              className="plusMinusBtn"
            >
              +
            </button>
            {props.amount}
            <button
              onClick={() => minusAmount(props.number)}
              className="plusMinusBtn"
            >
              -
            </button>
          </div>
        </th>
      )) || <th></th>}
      <th>
        {user
          ? roundToTwo(props.price - props.price * SAVE)
          : parseFloat(props.price).toFixed(2)}
      </th>
      {props.category != "ריק" && props.category != " " && (
        <th>
          <button
            className="btnDelete"
            onClick={() => {
              deletItem(props.number)
            }}
          >
            הסר
          </button>
        </th>
      )}
      {props.category === " " && (
        <th>
          <button
            className="btnDelete"
            onClick={() => {
              if (window.confirm("אתה בטוח רוצה למחוק הכל?")) {
                setCart([])
                setCartSum(0)
                localStorage.clear("cart")
              }
            }}
          >
            נקה עגלה
          </button>
        </th>
      )}
    </tr>
  )
}

export default TableRow

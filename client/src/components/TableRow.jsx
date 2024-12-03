import React, { useContext } from "react"
import { StoreContext } from "../App"

const TableRow = (props) => {
  const {
    SAVE,
    user,
    deletItem,
    setCart,
    setCartSum,
    cartSum,
    roundToTwo,
    minusAmount,
    addAnother,
  } = useContext(StoreContext)

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
        {user ? roundToTwo(props.price - props.price * SAVE) : props.price}
      </th>
      {props.category != "ריק" && props.category != " " && (
        <th>
          <button
            className="btnDelete"
            onClick={() => {
              deletItem(props.number)
              // user?setCartSum(roundToTwo(cartSum - props.price-props.price*SAVE)):
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
              if (
                window.confirm(
                  "אתה בטוח רוצה למחוק הכל?"
                )
              ) {
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

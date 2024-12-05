import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { StoreContext } from '../contexts/StoreContaxtProvider';
import TableRow from '../components/TableRow';
import { Order } from '../components/Order';

const Cart = () => {
    const {cart, cartSum } = useContext(StoreContext);
    const [makeOrder, setMakeOrder] = useState(false)
      const showOrderPage = () => setMakeOrder(true)
      const hideOrderPage = () => setMakeOrder(false)

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
              />
            )
        })
        return tableRowArr;
    }
    return (
      <>
        <Header />
        <main>
          <div className="mycontainer text-center">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>שם המוצר</th>
                  <th>קטגוריה</th>
                  <th className="amountTh">כמות</th>
                  <th>מחיר</th>
                  <th>הסרה</th>
                </tr>
              </thead>
              <tbody>
                {tableRowGenerator()}
                {!cart.length && (
                  <TableRow
                    number=" "
                    title="העגלה ריקה"
                    category="ריק"
                    price="0"
                  />
                )}
                <TableRow
                  number=" "
                  title="סה''כ לתשלום"
                  category=" "
                  price={cartSum}
                />
              </tbody>
            </table>
            <button onClick={showOrderPage} className="fomBtn m-2">
              השלם הזמנה
            </button>
          </div>
        </main>
        {makeOrder && <Order exit={hideOrderPage} />}
        <Footer />
      </>
    )
}

export default Cart
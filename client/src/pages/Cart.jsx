import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TableRow from '../components/Tablerow';
import { StoreContext } from '../contexts/StoreContaxtProvider';

const Cart = () => {
    const {cart, cartSum } = useContext(StoreContext);

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
          <div className="mycontainer">
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
                {!cart[0] && (
                  <TableRow
                    number="0"
                    title="העגלה ריקה"
                    category="ריק"
                    price="0"
                  />
                )}
                {
                  <TableRow
                    number=" "
                    title="סה''כ לתשלום"
                    category=" "
                    price={cartSum}
                  />
                }
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </>
    )
}

export default Cart
import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextpProvider';
import { StoreContext } from '../contexts/StoreContaxtProvider';

const Product = () => {
    const location = useLocation();
    const { addItem, roundToTwo, SAVE} = useContext(StoreContext);
    const { user } = useContext(UserContext)
    const { pic, title, category, description, price } = location.state || {};
    const item = { title: title, category: category, amount: 1, price: price }
    const userSave = () =>{
        
        return !user?price:roundToTwo(price-price*SAVE);
    };
    return (
        <>
            <Header />
            <main>
                <div className='mycontainer product'>
                    <img src={pic} className='pImg' alt="..." />

                    <h4 className="fw-bold fs-1">{title}</h4>
                    <h5 className='fs-3'>Caterory: {category}</h5>
                    <p className='w-50 fst-normal'>{description}</p>
                    <p><del>{user&&price}</del> {userSave()}$</p>
                    <div>
                    <button onClick={() => addItem(item)} className="cBtn">הוסף לעגלה</button>
                    </div>

                </div>
            </main>

        </>
    )
}

export default Product
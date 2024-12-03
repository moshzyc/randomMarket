import React, { useContext } from 'react'
import { StoreContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const { addItem, user, SAVE, roundToTwo } = useContext(StoreContext);
    const item = { title: props.title, category: props.category, price: props.price, amount: 1};

    const productNavigate = () => {
        navigate('/product', {
            state: {
                pic: props.pic,
                title: props.title,
                category: props.category,
                description: props.description,
                price: props.price
            },
        });
    };
    const userSave = () =>{
        
        return !user?props.price:roundToTwo(props.price-props.price*SAVE);
    };
    return (
      <div>
        <div className="myCard">
          <img
            src={props.pic}
            onClick={productNavigate}
            className="cImg"
            alt="..."
          />
          <div>
            <h4 className="cTitle" onClick={productNavigate}>
              {props.title}
            </h4>
            <h5 className="cCategory">{props.category}</h5>
            <p className="d-none">{props.description}</p>
            <p>
              {userSave()} <del>{user && props.price}</del>
            </p>
            <button onClick={productNavigate} className="cBtn">
              לדף המוצר
            </button>
            <br />
            <button onClick={() => addItem(item)} className="cBtn">
              הוסף לעגלה
            </button>
          </div>
        </div>
      </div>
    )
}

export default Card
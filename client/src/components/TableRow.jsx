import React, { useContext } from 'react'
import { StoreContext } from '../App';


const TableRow = (props) => {
    const { SAVE, user, deletItem, setCartSum, cartSum, roundToTwo} = useContext(StoreContext);


    return (
        <tr>
            <th>{props.number}</th>
            <th>{props.title}</th>
            <th>{props.category}</th>
            <th>{user?roundToTwo(props.price-props.price*SAVE):props.price}</th>
            {props.category != "ריק" && props.category != " " && <th><button className='btnDelete'
                onClick={() => {
                    deletItem(props.number);
                    // user?setCartSum(roundToTwo(cartSum - props.price-props.price*SAVE)):
                    setCartSum(roundToTwo(cartSum - props.price));
                }}>remove</button></th>}
        </tr>
    )
}

export default TableRow
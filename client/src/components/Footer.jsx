import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="mycontainer footer">
                <div className='footInfo'>
                    <p>נווה עצלנות 770, מעלה פרחים</p>
                    <p>משלוח מהיר</p>
                    <p>אין מכירת כוהל אחרי השעה 23:00</p>
                </div>
                <nav className='footNav'>
                    <Link className={'fNavLink'} to={"/"}>דף הבית</Link>
                    <Link className={'fNavLink'} to={"/market"}>לחנות</Link>
                    <Link className={'fNavLink'} to={"/cart"}>עגלת קניות</Link>
                    <Link className={'fNavLink'} to={"/aboutUs"}>אודות</Link>
                    <Link className={'fNavLink'} to={"/contactUs"}>צור קשר</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
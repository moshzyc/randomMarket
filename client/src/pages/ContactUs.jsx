import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavInfo from '../components/NavInfo'
import Map from '../components/Map'

const ContactUs = () => {
  return (
    <>
    <Header/>
    <main>
        <div className="mycontainer">
            <div>
            <h2>דברו איתנו:</h2>
            <p>פלא': 0520000000</p>
            <p>אימייל: RandonMarker770@gmail.com</p>
            <p>כתובת: נווה עצלנות 770, מעלה פרחים</p>
            </div>
            <NavInfo/>
            <Map/>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default ContactUs
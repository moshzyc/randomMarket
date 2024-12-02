import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'


const LoginPage = () => {
  return (
    <>
    <Header/>
    <main>
    <div className='mycontainer formContainer'>
        <h1 className='formTitles'>Login</h1>
        <Form/>
    </div>
    </main>
    <Footer/>
    </>
  )
}

export default LoginPage
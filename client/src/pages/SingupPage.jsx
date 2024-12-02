import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SignupPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className="mycontainer formContainer">
                    <h1 className='formTitles'>Sign up</h1>
                    <Form isSignup />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default SignupPage
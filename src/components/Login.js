import AnimatedLetters from './AnimatedLetters'
import { useState } from 'react'
import { registerNewUser, signInWithEmail } from '../firebase'


const Login = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const stringTitle = 'Login'

    function updateEmail (event) {
        setEmail(event.target.value)
        console.log(email)
    }

    function updatePassword (event) {
        setPassword(event.target.value)
        console.log(password)
       
    }

    function logUserIn (event) {
        event.preventDefault() // prevent the default effect of submit, which is to reload the page
        console.log(email, password)
        setPassword('')
        setEmail('')

        signInWithEmail(email, password)
    }

    function registerUser (event) {
        event.preventDefault()
        console.log(email, password)
        setPassword('')
        setEmail('')
        registerNewUser(email, password)
    }

    return (

        <div className="login-page">

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                    value={email} 
                    onChange={updateEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
           
              </div>
              <div className="mt-2">
                <input
                    value={password} 
                    onChange={updatePassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                value="Submit"
                onClick={logUserIn}
                className="flex w-full justify-center rounded-md bg-rose-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

         
        </div>
      </div>

            {/* <div className="forms">
                <form className='login my-5'>
                    
                    <h3 className='mb-4 my-5'>Login Form</h3>
                    <div className='w-full'>
                        <input className='mr-2 text-black' type='text' placeholder='Email' value={email} onChange={updateEmail}/>
                        <input className='mr-2 text-black' type='password' placeholder='Password' value={password} onChange={updatePassword}/>
                    </div>
                    <div className='w-full'>
                        <input className='mt-4 bg-gray-400 px-3' type='submit' value="Submit" onClick={logUserIn}/>
                    </div>
                </form>

                {/* <form className='register my-5'>
                    <h3 className='mb-4'>Register Form</h3>
             
                    <div className='w-full'>
                        <input className='mr-2 text-black' type='text' placeholder='Email' onChange={updateEmail}/>
                        <input className='mr-2 text-black' type='password' placeholder='Password' onChange={updatePassword}/>
                    </div>
                    <div className='w-full'>
                        <input className='mt-4 bg-gray-400 px-3' type='submit' value="Submit" onClick={registerUser}/>
                    </div>
                </form> */}
            {/* </div> */} 
        </div>
    )
}

export default Login
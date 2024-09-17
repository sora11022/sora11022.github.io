import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/login.scss'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate("")
  
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault()
    setError("")
    try {
      const res = await axios.post(`https://reqres.in/api/login`,{
        email: email,
        password: password,
      })
      localStorage.setItem("access_token", res.data.token)
      if (localStorage.getItem("access_token")) {
        navigate('/')
      } else {
        console.log("can dang nhap");
      }
    } catch (error) {
      console.log("Error", error.message);
      setError(error.response ? error.response.data.error : "login failed")
    }
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='m-auto space-y-4 md:space-y-6 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div>
                <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                <input value={email} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleEmailChange} type="email" />
            </div>
            <div>
                <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                <input value={password} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handlePassword} type="password" />
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Login</button>
        </form>
    </div>
  )
}

export default Login
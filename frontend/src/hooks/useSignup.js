import { useState } from 'react'
import { useAuthContext } from './useAuthContext'



export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, userType, rollNo, shopName) => {
    setIsLoading(true)
    setError(null)
    console.log(userType)
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, userType, rollNo, shopName })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // try {
      //   await transporter.sendMail({
      //     from: process.env.EMAIL,
      //     to: email,
      //     subject: "Validation OTP from TrackIT",
      //     text: "This is a test string",
      //     html: "<h1>OTP 123</h1>"
      //   })
      //   console.log("Email sent");

      // }
      // catch (error) {
      //   console.log(error);
      // }


      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
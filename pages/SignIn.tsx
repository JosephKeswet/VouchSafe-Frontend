import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../components/registration/Login'
import { RootState } from '../store'

type Props = {}

const SignIn = (props: Props) => {
  const isLoggedIn = useSelector((state:RootState) => state.user.isLoggedIn)

  return (
    <div>
      <Login/>
    </div>
  )
}

export default SignIn
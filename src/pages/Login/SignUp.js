import React from 'react'
import { useSelector } from 'react-redux'
import MerchantSignUp from './modules/MerchantSignUp'

const SignUp = () => {
  const currentRole = useSelector((state) => state.role.type)

  return (
    <>{currentRole === 'member' ? <span>Hello</span> : <MerchantSignUp />}</>
  )
}

export default SignUp

import React from 'react'
import { useSelector } from 'react-redux'
import MerchantSignUp from './modules/MerchantSignUp'

const SignUp = () => {
  const selectedRole = useSelector((state) => state.handleRole.type)

  return (
    <>{selectedRole === 'member' ? <span>Hello</span> : <MerchantSignUp />}</>
  )
}

export default SignUp

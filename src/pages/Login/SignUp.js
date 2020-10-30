import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MerchantSignUp from './modules/MerchantSignUp'

const SignUp = () => {
  const currentRole = useSelector((state) => state.role.type)

  return (
    <>{currentRole === 'member' ? <span>Hello</span> : <MerchantSignUp />}</>
  )
}

export default SignUp

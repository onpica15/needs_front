import React, { useState } from 'react'
import MerchantSignUp from './modules/MerchantSignUp'

const SignUp = () => {
  const [role, setRole] = useState({ role: 'merchant' })

  const handleRole = (value) => {
    setRole({ role: value })
  }

  return (
    <>
      {role.role === 'member' ? (
        <span>Hello</span>
      ) : (
        <MerchantSignUp role={role} setRole={setRole} handleRole={handleRole} />
      )}
    </>
  )
}

export default SignUp

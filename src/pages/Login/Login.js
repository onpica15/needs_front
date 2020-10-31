import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MerchantLogin from './modules/MerchantLogin'
import MemberLogin from './modules/MemberLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const currentRole = useSelector((state) => state.role.type)

  return (
    <>
      {currentRole === 'member' ? (
        <MemberLogin
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <MerchantLogin
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  )
}

export default Login

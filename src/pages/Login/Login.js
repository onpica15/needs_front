import React, { useState } from 'react'
import MerchantLogin from './modules/MerchantLogin'
import MemberLogin from './modules/MemberLogin'

const Login = () => {
  const [role, setRole] = useState({ role: 'merchant' })
  const [memberIsAuth, setMemberIsAuth] = useState(false)
  const [merchantIsAuth, setMerchantIsAuth] = useState(false)

  const [authUsername, setAuthUsername] = useState('')
  const [authPassword, setAuthPassword] = useState('')

  //從資料庫撈
  const [username, setUsername] = useState('test@gmail.com')
  const [password, setPassword] = useState('123')

  const handleRole = (value) => {
    setRole({ role: value })
  }

  return (
    <>
      {role.role === 'member' ? (
        <MemberLogin role={role} setRole={setRole} handleRole={handleRole} />
      ) : (
        <MerchantLogin
          role={role}
          setRole={setRole}
          handleRole={handleRole}
          merchantIsAuth={merchantIsAuth}
          setMerchantIsAuth={setMerchantIsAuth}
          username={username}
          password={password}
          authUsername={authUsername}
          setAuthUsername={setAuthUsername}
          authPassword={authPassword}
          setAuthPassword={setAuthPassword}
        />
      )}
    </>
  )
}

export default Login

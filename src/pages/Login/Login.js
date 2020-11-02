import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { userActions, roleActions, alertActions } from '../../actions'
import MerchantLogin from './modules/MerchantLogin'
import MemberLogin from './modules/MemberLogin'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const currentRole = useSelector((state) => state.role.type)
  const alertMsg = useSelector((state) => state.alert.message)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (username && password) {
      props.login(username, password, currentRole)
    }
  }

  useEffect(() => {
    setUsername('')
    setPassword('')
  }, [currentRole])

  return (
    <>
      {currentRole === 'member' ? (
        <MemberLogin
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          submitted={submitted}
          setSubmitted={setSubmitted}
          handleSubmit={handleSubmit}
          currentRole={currentRole}
          setMember={props.setMember}
          setMerchant={props.setMerchant}
          setNeeds={props.setNeeds}
          login={props.login}
          logout={props.logout}
          alertMsg={alertMsg}
        />
      ) : (
        <MerchantLogin
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          submitted={submitted}
          setSubmitted={setSubmitted}
          handleSubmit={handleSubmit}
          currentRole={currentRole}
          setMember={props.setMember}
          setMerchant={props.setMerchant}
          setNeeds={props.setNeeds}
          login={props.login}
          logout={props.logout}
          alertMsg={alertMsg}
        />
      )}
    </>
  )
}

const mapStateToProps = (store) => {
  const { loggingIn } = store.authentication
  const { type } = store.role
  return { loggingIn, type }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
  setMember: roleActions.setMember,
  setMerchant: roleActions.setMerchant,
  setNeeds: roleActions.setNeeds,
  clear: alertActions.clear,
}

export default connect(mapStateToProps, actionCreators)(Login)
// export default Login

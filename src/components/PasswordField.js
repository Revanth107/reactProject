import React from 'react'

function PasswordField(props) {
  return (
    <input type = "password" name='password' value={props.value} id='password' onChange={props.onChange}/>
  )
}

export default PasswordField
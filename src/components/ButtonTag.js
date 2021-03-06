import React from 'react'

function ButtonTag({type,name,onClick}) {
  return (
    <button type={type} name = {name} onClick = {onClick}>{name}</button>
  )
}

export default ButtonTag
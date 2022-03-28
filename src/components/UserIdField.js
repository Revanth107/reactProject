import React from 'react'

function UserIdField(props) {
  return (
    <React.Fragment>
        <input type = "text" name='userId' value={props.value} id='userId' onChange={props.onChange}/>
    </React.Fragment>
  )
}

export default UserIdField
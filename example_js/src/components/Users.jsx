import React from 'react'
import UseFetch from '../hooks/useFetch'

function Users() {
    const [users, setUsers] = UseFetch('https://randomuser.me/api/?results=1')
  return (
    <div>Users
        {console.log(users)}
        
      
    </div>
  )
}

export default Users

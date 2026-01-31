
function UserList({el, hdlClickUser}) {
  return (
    <li className="bg-pink-200" onClick={()=>hdlClickUser(el.id)}><a>{el.name}, {el.email}</a></li>
  )
}

export default UserList
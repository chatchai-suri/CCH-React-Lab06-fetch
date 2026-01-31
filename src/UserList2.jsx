
function UserList({el, fetchPost}) {
  return (
    <li className="bg-pink-200" onClick={()=>fetchPost(el.id, el.name)}><a>{el.name}, {el.email}</a></li>
  )
}

export default UserList
import { useEffect, useState } from "react";

function App() {
  // JS area

  // state area
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([])

  // function area
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  const hdlDisplayNameAndEmail = () => {
    return users.map((el) => (
      <li key={el.id} className="bg-pink-200" onClick={()=>fetchPost(el.id)} ><a>{el.name}, {el.email}</a></li>
    ))
  };

  const fetchPost = (id) => {
    let endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    fetch(endpoint)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }

  // JSX area
  return (
    <div className="flex flex-col gap-2 p-4">
      <button className="btn btn-primary w-fit" onClick={fetchUsers}>
        Refresh Users
      </button>
      <div className="divider">User List</div>
      {/* Display all username and email */}
      <ul className="menu menu-lg bg-base-200 rounded-box w-4/5 gap-1">
        {hdlDisplayNameAndEmail()}
      </ul>
      <div className="divider">Posts of user </div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}

export default App;

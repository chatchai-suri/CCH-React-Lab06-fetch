import { useEffect, useState } from "react";
// import UserList from "./UserList";
import UserList2 from "./UserList2";
import PostList from "./PostList";

function App() {
  // JS area

  // state area
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([])
  const [username, setUsername] = useState("Please select user to see post")

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

  // const hdlDisplayNameAndEmail = () => {
  //   return users.map((el) => (
  //     <li key={el.id} className="bg-pink-200" onClick={()=>{
  //       fetchPost(el.id)
  //       fetchUsername(el.id)
  //       }} >
  //       <a>{el.name}, {el.email}</a></li>
  //   ))
  // };

  const fetchPost = (id, name) => {
    setUsername(name)
    let endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    fetch(endpoint)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        setPosts(data)
      })
  }

  // const fetchUsername = (id) => {
  //   let endpoint = `https://jsonplaceholder.typicode.com/users?id=${id}`
  //   fetch(endpoint)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       if(data.length > 0){
  //         setUsername(data[0].name)
  //       }
  //     })
  // }

  

  // JSX area
  return (
    <div className="flex flex-col gap-2 p-4">
      <button className="btn btn-primary w-fit" onClick={fetchUsers}>
        Refresh Users
      </button>
      <div className="divider">User List</div>
      {/* Display all username and email */}
      <ul className="menu menu-lg bg-base-200 rounded-box w-4/5 gap-1">
        {/* {hdlDisplayNameAndEmail()} */}
        {users.map((el)=>(
          // <UserList key={el.id} el={el} hdlClickUser={(id)=> {fetchPost(id); fetchUsername(id)}}  />
          <UserList2 key={el.id} el={el} fetchPost={fetchPost}  />
        ))}
      </ul>
      <div className="divider">Posts of user: {username} </div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {posts.map((el)=>(
        <PostList key={el.id} el={el} />
      ))}
    </div>
  );
}

export default App;

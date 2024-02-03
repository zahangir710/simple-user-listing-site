import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);
  console.log(users);
  return (
    <div className="card-container ">
      {users.map((user) => (
        <Card user={user} key={user.id}></Card>
      ))}
    </div>
  );
}

export default Home;

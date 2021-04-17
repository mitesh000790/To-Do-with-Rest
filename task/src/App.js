import React, { useEffect, useState } from "react";
import { User } from "./components/User";
import { AddUser } from "./components/AddUser";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (name, email, phone, gender,nation) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone:phone,
        gender:gender,
        nation:nation
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, name, email, phone, gender, nation) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
        phone:phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
            user.phone = phone;
            user.gender = gender;
            user.nation = nation;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Router>
      <div>
        <header className='navbar'>
          <div className='navbar__title navbar__item'>To-Do</div>
          <Link to="/"><div className='navbar__item active'>ADD</div></Link>
          <Link to="/view"><div className='navbar__item'>View</div></Link>
          {/* <Link to="/"><div className='navbar__item'>Help</div></Link>       */}
        </header>

        <Switch>
          <Route exact path="/view">
            <table>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Gander</th>
              <th>Nationality</th>
              <th>Action</th>
            </table>
            {users.map((user) => (
              <User
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                gender={user.gender}
                nation={user.nation}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <AddUser onAdd={onAdd} />
          </Route>
        </Switch>
      </div>
    </Router>    
    </div>
  );
}


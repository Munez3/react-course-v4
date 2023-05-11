import { useState } from "react";
import User from "./User";

export default function App() {
  const [user, setUser] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    age: 23,
  });

  const [users, setUsers] = useState([
    { firstName: "Jan", lastName: "Kowalski", age: 23, id: 1 },
    { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
    { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
  ]);

  return (
    <>
      <input
        onChange={(e) => {
          setUser({ ...user, firstName: e.target.value });
        }}
        name="firstName"
        placeholder="Imię"
      />
      <input
        onChange={(e) => {
          setUser({ ...user, lastName: e.target.value });
        }}
        name="lastName"
        placeholder="Nazwisko"
      />
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
      />

      <div>Lista</div>
      {users.map((user) => (
        <div key={user.id}>
          <User
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
          />
        </div>
      ))}
    </>
  );
}

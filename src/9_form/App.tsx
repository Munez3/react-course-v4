import { useState } from "react";
import User from "./User";
import AddUserForm from "./AddUserForm";

export default function App() {
  const [users, setUsers] = useState([
    { firstName: "Jan", lastName: "Kowalski", age: 16, id: 1 },
    { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
    { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
  ]);

  return (
    <>
      <AddUserForm />
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

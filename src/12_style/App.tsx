import { useState } from "react";
import User from "./User/User";
import AddUserForm from "./AddUserForm/AddUserForm";
import "./index.scss";

let id = 10;

export default function App() {
  const [users, setUsers] = useState<IUserWithID[]>([
    { firstName: "Jan", lastName: "Kowalski", age: 16, id: 1 },
    { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
    { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
  ]);

  function addUser(newUser: IUser) {
    const userWithId = { ...newUser, id: id++ };
    setUsers([...users, userWithId]);
  }

  return (
    <div className="grid grid-col-2">
      <AddUserForm addUser={addUser} />
      <div>
        <div className="grid grid-col-3 mb-1">
          <span>Imię</span>
          <span>Nazwisko</span>
          <span>wiek</span>
        </div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

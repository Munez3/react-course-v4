import { useState } from "react";
import User from "./User";

export default function App() {
  const [user, setUser] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    age: 23,
  });

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
    </>
  );
}

import { useState } from "react";
import User from "./User";

export default function AddUserForm(): React.ReactElement {
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    age: undefined,
  });

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handlechange} name="firstName" placeholder="Imię" />
        <input onChange={handlechange} name="lastName" placeholder="Nazwisko" />
        <input
          onChange={handlechange}
          type="number"
          name="age"
          placeholder="Wiek"
        />
        <button type="submit">Dodaj</button>
      </form>
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
      />
    </>
  );
}

import { useRef, useState } from "react";

interface IProps {
  addUser: (user: IUser) => void;
}

export default function AddUserForm({ addUser }: IProps): React.ReactElement {
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    age: undefined,
  });

  const formRef = useRef<HTMLFormElement>(null);

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addUser(user);
    formRef.current?.reset(); // reset form
    formRef.current?.firstName.focus(); // focus on firstName input
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
  );
}

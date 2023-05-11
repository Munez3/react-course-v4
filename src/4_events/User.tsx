interface IProps {
  firstName: string;
  lastName: string;
  age: number;
}

export default function User({
  firstName,
  lastName,
  age,
}: IProps): React.ReactElement {
  return (
    <>
      Użytkownik {firstName} {lastName}, wiek {age}
      <button onClick={() => alert(firstName)}>Kliknij mnie</button>
    </>
  );
}

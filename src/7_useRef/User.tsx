interface IProps {
  firstName: string;
  lastName: string;
}

export default function User({
  firstName,
  lastName,
}: IProps): React.ReactElement {
  return (
    <>
      Użytkownik {firstName} {lastName}
    </>
  );
}

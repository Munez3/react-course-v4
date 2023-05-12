import "./user.scss";
interface IProps {
  user: IUser;
}

export default function User({ user }: IProps): React.ReactElement {
  const { firstName, lastName, age } = user;

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <div className="user">
      <span className="user__data">{firstName ? firstName : "- -"}</span>
      <span className="user__data">
        {lastName && <strong>{lastName}</strong>}
      </span>
      <span className="user__data">
        wiek {age} {age && age > 18 && <i>pełnoletni</i>}
      </span>
    </div>
  );
}

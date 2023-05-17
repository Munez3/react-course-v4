import "./user.scss";
interface IProps {
  user: IUser;
  isActive: boolean;
  onClick: () => void;
}

export default function User({
  user,
  isActive,
  onClick,
}: IProps): React.ReactElement {
  const { firstName, lastName, age } = user;

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <div className="user">
      <div className="grid grid-col-2" onClick={onClick}>
        <span>{firstName ? firstName : "- -"}</span>
        <span>{lastName && <strong>{lastName}</strong>}</span>
      </div>
      {isActive && (
        <div>
          <span>
            Wiek: {age} {age && age > 18 && <i>pełnoletni</i>}
          </span>
        </div>
      )}
    </div>
  );
}

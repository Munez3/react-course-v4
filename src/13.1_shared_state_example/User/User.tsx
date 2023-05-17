import { useState } from "react";
import "./user.scss";
interface IProps {
  user: IUser;
}

export default function User({ user }: IProps): React.ReactElement {
  const { firstName, lastName, age } = user;

  const [isOpen, setIsOpen] = useState(false);

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <div className="user">
      <div className="grid grid-col-2" onClick={() => setIsOpen(!isOpen)}>
        <span>{firstName ? firstName : "- -"}</span>
        <span>{lastName && <strong>{lastName}</strong>}</span>
      </div>
      {isOpen && (
        <div>
          <span>
            Wiek: {age} {age && age > 18 && <i>pełnoletni</i>}
          </span>
        </div>
      )}
    </div>
  );
}

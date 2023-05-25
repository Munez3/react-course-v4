import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import "./index.scss";
import Home from "./Home";
import App from "./App";
import { UserContextProvider } from "./UserContext";

export default function Router() {
  return <RouterProvider router={router} />;
}

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Nav />
      </UserContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <App />,
      },
    ],
  },
]);

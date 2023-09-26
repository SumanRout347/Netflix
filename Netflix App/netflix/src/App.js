import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Content from "./components/Content";
import MyAccount from "./components/MyAccount";
import MyList from "./components/MyList";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Content /> },
    {path:"/account",element:<MyAccount/>},
    {path:"/list",element:<MyList/>}
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

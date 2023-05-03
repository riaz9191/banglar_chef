import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import RecipeLayout from "../Layout/RecipeLayout/RecipeLayout";
import Register from "../Pages/Shared/Register";
import Login from "../Pages/Shared/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "chefres",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: "/chefres",
        element: <ChefRecipe></ChefRecipe>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:7000/chefdata/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;

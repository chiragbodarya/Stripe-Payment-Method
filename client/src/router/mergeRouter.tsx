import { createBrowserRouter } from "react-router-dom";
import { Documentation, Home, NotFound } from "../pages";

const mergeRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <Documentation />,
  },
  {
    path: "*", // Catch-all route for 404
    element: <NotFound />,
  },
]);

export default mergeRouter;

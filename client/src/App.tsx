import { Outlet, RouterProvider } from "react-router-dom";
import mergeRouter from "./router/mergeRouter";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <div>
      <RouterProvider router={mergeRouter} />
      <Outlet />
      <Toaster />
    </div>
  );
};

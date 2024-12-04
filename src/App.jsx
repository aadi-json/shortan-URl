import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landingpage";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import Redirect from "./pages/redirect-link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link:id",
        element: <Link />,
      },
      {
        path: "/redirect-link",
        element: <Redirect />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

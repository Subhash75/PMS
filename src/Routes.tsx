/*
All Routes setup done here
Uses router 6 createBrowserRouter object method for creating routes
Used in <App /> 
*/
import { lazy, Suspense } from "react"; // Import lazy and Suspense
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthRoute from "./components/LayoutRoutes/AuthRoute";
import MainLayout from "./components/LayoutRoutes/MainLayout";
import ChunkLoader from "./components/Loaders/ChunkLoader";
// import CheckList from "./modules/Checklist";

const LoginPage = lazy(() => import("./modules/Login/LoginPage"));
const Dashboard = lazy(() => import("./modules/Dashboard"));
const Inventory = lazy(() => import("./modules/Inventory"));
const Scheduling = lazy(() => import("./modules/Scheduling"));
const ScheduledTasks = lazy(() => import("./modules/ScheduledTasks.tsx"));
const Tracking = lazy(() => import("./modules/Tracking"));
const Report = lazy(() => import("./modules/Report"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <AuthRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/inventory",
            element: <Inventory />,
          },
          {
            path: "/scheduling",
            element: <Scheduling />,
          },
          {
            path: "/scheduled-tasks",
            element: <ScheduledTasks />,
          },
          {
            path: "/tracking",
            element: <Tracking />,
          },
          {
            path: "/report",
            element: <Report />,
          },
          // {
          //   path: "/checklist",
          //   element: <CheckList />,
          // },
        ],
      },
    ],
  },
]);

function Routes() {
  return (
    <Suspense fallback={<ChunkLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Routes;

import Dashboard from "../pages/dashboard";

const MainRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
    isMain: true,
    exact: true,
  }, // Add more routes as needed
];

export default MainRoutes;

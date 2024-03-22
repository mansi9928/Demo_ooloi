import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
function Router() {
  const routing = () => {
    return (
      <>
        <Routes>
          <Route path="/" exact={true} element={<Navigate to="/dashboard" />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              //   element={route.element}
              Component={() => {
                return <>{route.element};</>;
              }}
            />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </>
    );
  };
  return <BrowserRouter>{routing()}</BrowserRouter>;
}

export default Router;

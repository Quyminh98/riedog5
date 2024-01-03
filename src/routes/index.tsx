import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_HOME, PATH_AIR_DROPS } from "./paths";
// import { routes } from "./routes";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const AirdropLayout = lazy(() => import("../layouts/AirdropLayout"));
const Homepage = lazy(() => import("../pages/Home"));
const AirDroppage = lazy(() => import("../pages/AirDrop"));

export default function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/">
          <Route path="/" element={<MainLayout />}>
            <Route path={PATH_HOME} element={<Homepage />} />
          </Route>
          <Route path={PATH_AIR_DROPS} element={<AirdropLayout />}>
            <Route path={PATH_AIR_DROPS} element={<AirDroppage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

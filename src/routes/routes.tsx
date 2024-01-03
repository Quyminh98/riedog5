import { lazy } from "react";
import { IRoute } from "../interfaces/route";
import { PATH_AIR_DROPS, PATH_HOME } from "./paths";

const Homepage = lazy(() => import("../pages/Home"));
const AirDroppage = lazy(() => import("../pages/AirDrop"));

export const routes: IRoute[] = [
  {
    path: PATH_HOME,
    name: "Home",
    element: <Homepage />,
  },

  {
    path: PATH_AIR_DROPS,
    name: "Airdrop",
    element: <AirDroppage />,
  },
];

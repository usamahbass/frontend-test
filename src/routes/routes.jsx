import { lazy } from "react";

const HomePages = lazy(() => import("~/pages/"));
const JobDetailPages = lazy(() => import("~/pages/JobDetail"));

export const routes = [
  {
    path: "/",
    exact: true,
    element: <HomePages />,
  },
  {
    path: "/job-detail/:id",
    exact: true,
    element: <JobDetailPages />,
  },
  {
    path: "*",
    exact: true,
    element: <div>not found route</div>,
  },
];

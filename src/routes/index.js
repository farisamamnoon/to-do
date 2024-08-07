import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages";
import { Upcoming } from "../pages/upcoming";
import Today from "../pages/today";
import { StickyWall } from "../pages/sticky";
import { ListPage } from "../pages/list";
import { NewTask } from "../components/new-task";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/upcoming",
        element: <Upcoming />,
        children: [
          {
            path: ":id",
            element: <NewTask />,
          },
          {
            path: "add",
            element: <NewTask />,
          },
        ],
      },
      {
        path: "/today",
        element: <Today />,
      },
      {
        path: "/sticky",
        element: <StickyWall />,
      },
      {
        path: "/:list",
        element: <ListPage />,
      },
    ],
  },
]);

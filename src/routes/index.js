import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages";
import { Upcoming } from "../pages/upcoming";
import Today from "../pages/today";
import { StickyWall } from "../pages/sticky";
import { ListPage } from "../pages/list";
import { NewTask } from "../components/new-task";
import { request as sendRequest } from "../utils/request";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: async () => {
      return await sendRequest("lists");
    },
    action: async ({ request }) => {
      const data = Object.fromEntries(await request.formData());
      return await sendRequest("lists", "POST", data);
    },
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

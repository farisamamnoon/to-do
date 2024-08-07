import { Outlet } from "react-router";
import { MainHeader } from "../../components/main-header";
import { Card } from "../../components/task-card";

export function Upcoming() {
  const todayTasks = [
    { key: 1, title: "foo" },
    { key: 2, title: "foo" },
    { key: 3, title: "foo" },
  ];
  const tomorrowTasks = [
    { key: 1, title: "foo" },
    { key: 2, title: "foo" },
    { key: 3, title: "foo" },
  ];
  const weekTasks = [
    { key: 1, title: "foo" },
    { key: 2, title: "foo" },
    { key: 3, title: "foo" },
  ];

  return (
    <>
      {/* <div className="flex flex-col"> */}
      <MainHeader title="Upcoming" sub="4" />
      <div className="flex">
        <div className="flex flex-grow flex-wrap">
          <Card title="Today" list={todayTasks} width="w-full" />
          <Card title="Tomorrow" list={tomorrowTasks} width="flex-1" />
          <Card title="This Week" list={weekTasks} width="flex-1" />
        </div>
        <Outlet />
      </div>
      {/* </div> */}
    </>
  );
}

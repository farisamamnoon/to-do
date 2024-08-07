import { MainHeader } from "../../components/main-header";
import { Card } from "../../components/task-card";

export default function Today() {
  const todayTasks = ["Go Buy ", "Drive", "Fill the tank"];
  return (
    <>
      <MainHeader title="Today" sub="12" />
      <Card title="Today" list={todayTasks} />
    </>
  );
}

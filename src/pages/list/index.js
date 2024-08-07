import { useParams } from "react-router";
import { MainHeader } from "../../components/main-header";
import { Card } from "../../components/task-card";

export function ListPage() {
  const listHeading = useParams().list;
  return (
    <>
      <MainHeader title={listHeading} />
      <Card title={listHeading} list={["fou", "fou", "fou", "fou"]} />
    </>
  );
}

import { Outlet, useLocation, useNavigate } from "react-router";
import { Navigation } from "../components/navigation";
// import { IoMdAdd } from "react-icons/io";
// import "../index.css";

export function Dashboard() {
  // const path = useLocation().pathname;
  // const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-[20%_1fr]">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
      {/* {path != "/sticky"  && (
        <div
          className="w-12 h-12 bg-blue-400 hover:bg-blue-300 rounded-2xl fixed right-12 bottom-12 grid place-content-center text-3xl"
          onClick={() => navigate(`${path}/add`)}
        >
          <IoMdAdd />
        </div>
      )} */}
    </>
  );
}

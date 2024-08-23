import { NavHeader } from "./nav-header";
import { NavList } from "./nav-list";

//icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineToday } from "react-icons/md";
import { FaRegNoteSticky } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export function Navigation() {
  const [listNavItems, setListNavItems] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    setListNavItems(loaderData.data);
  }, [loaderData]);

  const taskNavItems = [
    {
      id: 1,
      icon: <MdKeyboardDoubleArrowRight key={1}/>,
      title: "upcoming",
      sub: "4",
    },
    {
      id: 2,
      icon: <MdOutlineToday key={2}/>,
      title: "today",
      sub: "7",
    },
    {
      id: 3,
      icon: <FaRegNoteSticky key={3}/>,
      title: "sticky",
      sub: "",
    },
  ];

  return (
    <nav className=" p-4 h-screen bg-slate-200 sticky right-0 top-0">
      <NavHeader />
      <NavList title="Tasks" items={taskNavItems} />
      <NavList
        title="Lists"
        items={listNavItems}
        customizable
        setItem={setListNavItems}
      />
    </nav>
  );
}

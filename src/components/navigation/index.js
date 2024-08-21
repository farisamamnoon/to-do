import { NavHeader } from "./nav-header";
import { NavList } from "./nav-list";

//icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineToday } from "react-icons/md";
import { FaRegNoteSticky } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { request } from "../../utils/request";
import { useLoaderData } from "react-router-dom";

export function Navigation() {
  const [listNavItems, setListNavItems] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    setListNavItems(loaderData.data);
  }, []);

  const taskNavItems = [
    {
      icon: <MdKeyboardDoubleArrowRight />,
      title: "upcoming",
      sub: "4",
    },
    {
      icon: <MdOutlineToday />,
      title: "today",
      sub: "7",
    },
    {
      icon: <FaRegNoteSticky />,
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

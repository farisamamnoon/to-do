import { useLocation, useNavigate } from "react-router";
import { Form } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";

export function NavList({ title, items, customizable }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <h3 className="uppercase font-medium">{title}</h3>
      <ul className="list-none m-1">
        {items.map((item) => (
          <li
            key={item.id}
            className={`p-2 flex justify-between items-center rounded ${pathname.includes(item.title) || "hover:bg-slate-300"} gap-2 ${pathname.includes(item.title) && "bg-primary text-slate-50"}`}
            onClick={() => navigate(item.title.split(" ")[0])}
          >
            <div>{item.icon}</div>
            <div className="flex-grow capitalize">{item.title}</div>
            <div>{item.sub}</div>
          </li>
        ))}
      </ul>
      {customizable && (
        <Form
          method="POST"
          className="m-1 p-2 flex items-center gap-2 hover:bg-slate-300 rounded"
        >
          <button
            type="submit"
            className=" bg-indigo-300 hover:bg-indigo-200 rounded"
          >
            <IoMdAdd />
          </button>
          <input
            className="w-full p-1 px-2 rounded border border-slate-300 text-sm"
            placeholder="Click + to add"
            name="title"
          />
        </Form>
      )}
    </div>
  );
}

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { getRandomIcon } from "../../utils/getRandomIcon";
import { useLocation, useNavigate } from "react-router";

export function NavList({ title, items, customizable, setItem }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);
  const [titleInput, setTitle] = useState("");

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      setItem((list) => [
        ...list,
        {
          icon: <div className={`w-3 h-3 ${getRandomIcon()} rounded`} />,
          title: titleInput,
          sub: "",
        },
      ]);
      setEdit(false);
      setTitle("");
    }
  };

  return (
    <div className="mt-5">
      <h3 className="uppercase font-medium">{title}</h3>
      <ul className="list-none m-1">
        {items.map((item, key) => (
          <li
            key={key}
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
        <div
          className="m-1 p-2 flex items-center gap-2 hover:bg-slate-300 rounded"
          onClick={() => setEdit(true)}
        >
          <IoMdAdd />
          {edit ? (
            <input
              id="search"
              type="text"
              placeholder="Add List"
              value={titleInput}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleSubmit}
              onBlur={() => setEdit(false)}
              className="w-full p-1 px-2 rounded border border-slate-300 text-sm"
            />
          ) : (
            <h4>Add New List</h4>
          )}
        </div>
      )}
    </div>
  );
}

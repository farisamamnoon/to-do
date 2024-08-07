import { MdArrowForwardIos } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router";

export function Card({ title, list, width }) {
  const navigate = useNavigate();

  return (
    <div className={`m-5 p-4 rounded-md shadow-lg bg-slate-200 ${width}`}>
      <h2 className="text-2xl font-medium mb-5">{title}</h2>
      <button
        className="m-1 my-2 flex items-center gap-4 w-max px-4 py-2 bg-primary hover:bg-teal-500 hover:text-black text-white rounded"
        onClick={() => navigate("add")}
      >
        <IoMdAdd />
        <h3>Add New Task</h3>
      </button>
      <div className="border-t-2">
        <ul className="mt-3">
          {list.map((item, key) => (
            <li
              className="flex flex-wrap justify-between content-baseline m-1 p-1 rounded hover:bg-slate-300"
              key={`${item.title}_${item.key}`}
              onClick={() => navigate(`${item.key}`)}
            >
              {/* <input type="checkbox" /> */}
              <p className="flex-grow mx-4">{item.title}</p>
              <MdArrowForwardIos />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { useEffect, useReducer, useState } from "react";
import { Form, useLoaderData, useLocation, useSubmit } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

import { IoMdAdd } from "react-icons/io";

import { taskReducer } from "../utils/addTaskReducer";
import { validateAddTask } from "../utils/validators/validateAddTask";

export function NewTask() {
  const [subTaskInput, setSubTaskInput] = useState("");
  const [errors, setErrors  ] = useState({});
  const [task, dispatch] = useReducer(taskReducer, {
    title: null,
    description: null,
    list: null,
    target_date: null,
    subtasks: [],
  });

  const { data } = useLoaderData();

  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const submit = useSubmit();

  useEffect(() => {
    //retreive data
    if (id) {
      const initState = {
        title: "Hai",
        description: "alkdhsfiosa dsfsahfdoe ;asd",
        list: "Work",
        target_date: "2024-04-21",
        subtasks: [
          { title: "do something", done: true },
          { title: "do", done: false },
        ],
      };
      dispatch({ type: "change_state", value: initState });
    }
  }, [id]);

  const handleSubmit = () => {
    const errors = validateAddTask(task);

    if (Object.keys(errors).length === 0) {
      submit(task, {
        method: "POST",
        action: `/${pathname.split("/").slice(0, 2).join("")}`,
        encType: "application/json",
      });
    } else {

    }
  };

  const handleListAdd = () => {
    dispatch({ type: "add_subtask", value: subTaskInput });
    setSubTaskInput("");
  };

  return (
    <>
      {/* < div className="absolute inset-0 bg-slate-500 bg-opacity-35 w-full h-full" /> */}
      <Form
        onSubmit={handleSubmit}
        className="w-1/4 flex flex-col p-4 m-4 bg-slate-200 rounded-lg transition-transform duration-300 ease-in-out"
      >
        <h2 className="py-2 text-xl font-semibold">Task:</h2>

        <input
          type="text"
          className="mt-2 py-1 px-2 bg-slate-100 border w-full capitalize"
          placeholder="Title"
          value={task.title}
          onChange={(e) =>
            dispatch({ type: "change_title", value: e.target.value })
          }
        />
        <textarea
          className="mt-2 py-1 px-2 border bg-slate-100 w-full"
          rows={3}
          placeholder="Description"
          value={task.description}
          onChange={(e) =>
            dispatch({ type: "change_description", value: e.target.value })
          }
        />

        <div className="mt-2 flex items-center text-sm">
          <label htmlFor="list" className="w-20">
            List
          </label>
          <select
            id="list"
            className="mx-2 p-1 bg-slate-100"
            value={task.list}
            onChange={(e) =>
              dispatch({ type: "change_list", value: e.target.value })
            }
          >
            {data.map((list) => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-2 pb-2 flex text-sm border-b">
          <label htmlFor="list" className="w-20">
            Due Date
          </label>
          <input
            type="date"
            className="mx-2 p-1 bg-slate-100"
            value={task.target_date}
            onChange={(e) =>
              dispatch({ type: "change_date", value: e.target.value })
            }
          />
        </div>

        <div>
          <h2 className="text-xl font-medium mt-2">Sub tasks</h2>
          <div className="m-1 p-1 flex items-center gap-2 hover:bg-slate-200 rounded">
            <IoMdAdd
              onClick={handleListAdd}
              className=" bg-indigo-300 hover:bg-indigo-200 rounded"
            />

            <input
              id="add task"
              type="text"
              placeholder="Press enter to add"
              value={subTaskInput}
              onChange={(e) => setSubTaskInput(e.target.value)}
              className="w-full p-1 px-2 rounded border border-slate-300 text-sm"
            />
          </div>
          <ul className="list-none m-1">
            {task.subtasks?.map((subtask, key) => (
              <li key={key} className={`p-1 flex rounded  gap-2 }`}>
                <input
                  type="checkbox"
                  checked={subtask.done}
                  onChange={(e) =>
                    dispatch({
                      type: "check_subtask",
                      value: e.target.checked,
                      key,
                    })
                  }
                />
                <div className="flex-grow capitalize">{subtask.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className=" mt-auto flex justify-between">
          <button
            className="py-2 px-4 rounded-lg font-semibold border-2 bg-indigo-300 hover:bg-indigo-200"
            onClick={() => navigate("/upcoming")}
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-primary hover:bg-teal-500 hover:text-black text-white py-2 px-4 rounded-lg font-semibold "
          >
            {id ? "Mark Done" : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

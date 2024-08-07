import { IoMdAdd } from "react-icons/io";

export function Model({ title, onClose, children }) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-400 bg-opacity-75 w-full h-full" onClick={onClose}></div>
      <div className=" bg-slate-200 fixed inset-x-1/3 inset-y-1/4 p-6 shadow-xl rounded-md flex flex-col gap-4 ">
        {children}
      </div>
    </>
  );
}

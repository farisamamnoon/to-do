import { IoMdAdd } from "react-icons/io";

export function StickyCard({ header, desc, color, addCard }) {
  return (
    <div className={`w-full h-72 p-5 rounded ${color}`}>
      {addCard ? (
        <div className="w-full h-full grid place-content-center text-7xl ">
          <IoMdAdd />
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-semibold">{header}</h1>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </>
      )}
    </div>
  );
}

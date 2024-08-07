import { SlOptionsVertical } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

export function NavHeader() {
  return (
    <>
      <div className="flex justify-between items-baseline">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <SlOptionsVertical />
      </div>
      <div className="mt-4 flex items-center">
        <label htmlFor="search">
          <CiSearch />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="w-full mx-1 py-1 px-4 rounded  border border-slate-300"
        />
      </div>
    </>
  );
}

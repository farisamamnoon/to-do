export function MainHeader({ title, sub }) {
  return (
    <div className="m-3 p-5 flex gap-10 items-center">
      <h1 className="text-5xl font-semibold capitalize">{title}</h1>
      <p className="text-4xl ">{sub}</p>
    </div>
  );
}

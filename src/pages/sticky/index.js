import { useEffect, useReducer, useState } from "react";
import { MainHeader } from "../../components/main-header";
import { getRandomBackground } from "../../utils/getRandomBackground";
import { StickyCard } from "./card";
import { Model } from "../../components/model";

const initialCards = [
  {
    header: "today",
    desc: "akfalfas alksdfj laskdjflak fkasjfask fkasdjfkas fdksadf lkasjflkas fdkas fdk",
  },
  {
    header: "today",
    desc: "akfalfas alksdfj laskdjflak fkasjfask fkasdjfkas fdksadf lkasjflkas fdkas fdk",
  },
  {
    header: "today",
    desc: "akfalfas alksdfj laskdjflak fkasjfask fkasdjfkas fdksadf lkasjflkas fdkas fdk",
  },
];

function formReducer(state, action) {
  switch (action.type) {
    case "update_header":
      return { ...state, header: action.value };
    case "update_desc":
      return { ...state, desc: action.value };
    case "clear_form":
      return { header: "", desc: "" };
    default:
      throw new Error("Unknown Action");
  }
}

export function StickyWall() {
  const [model, setModel] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [formR, dispatch] = useReducer(formReducer, { header: "", desc: "" });

  const addCardHandler = () => {
    setCards((prevCards) => [...prevCards, formR]);
    dispatch({ type: "clear_form" });
    setModel(false);
  };

  useEffect(() => {
    cards.map((card) => card.desc.replace(/\n/g, "<br >"));
  }, [cards]);

  return (
    <>
      <MainHeader title="sticky wall" sub="" />
      <main className="m-4 grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <StickyCard {...card} color={getRandomBackground(index % 13)} key={index}/>
        ))}
        <div
          className="m-0 p-0 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => setModel(true)}
        >
          <StickyCard addCard />
        </div>
        {model && (
          <Model onClose={() => setModel(false)}>
            <h2 className="text-2xl font-semibold">Add Sticky Card</h2>
            <input
              type="text"
              placeholder="Heading"
              className="py-2 px-3 font-medium"
              name="header"
              value={formR.header}
              onChange={(event) => dispatch({ type: "update_header", value: event.target.value })}
            />
            <textarea
              rows={10}
              placeholder="Something..."
              className="py-2 px-3"
              name="desc"
              value={formR.desc}
              onChange={(event) => dispatch({ type: "update_desc", value: event.target.value })}
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-blue-400 hover:bg-blue-300 rounded-md py-1 px-2 font-medium text-gray-200"
                onClick={addCardHandler}
              >
                Add Card
              </button>
              <button
                className="bg-red-400 hover:bg-red-300 rounded-md py-1 px-2 font-medium text-gray-200"
                onClick={() => setModel(false)}
              >
                Close
              </button>
            </div>
          </Model>
        )}
      </main>
    </>
  );
}

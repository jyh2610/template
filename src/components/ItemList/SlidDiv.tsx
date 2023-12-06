import { mdPickData } from "@/contants/mdPick";

import ListItem from "./ListItem";

function SlidDiv() {
  const newData = mdPickData.filter((item, idx) => idx < 3);
  return (
    <div className="h-[800px] flex justify-between ">
      <div
        className="w-1/2  bg-cover bg-center bg-no-repeat bg-(50%,50%)"
        style={{ backgroundImage: `url("https://cuchencdn.wisacdn.com/_data/promotion/2163a986e50e6c2fb0374a2734809f1c.png")` }}
      />
      {newData.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default SlidDiv;

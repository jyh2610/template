import { mdPickData } from "@/contants/mdPick";

import ListItem from "./ListItem";

import type { itemType } from "@/contants/mdPick";

function TopList({ title }: { title: string }) {
  return (
    <div className="px-10 mx-auto max-w-[1710px]">
      <p className=" mb-4">{title}</p>
      <div className="w-full flex justify-evenly">
        {mdPickData.map((item: itemType) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TopList;

import { mdPickData } from "@/contants/mdPick";

import ListItem from "./ListItem";

import type { itemType } from "@/contants/mdPick";

function TopList({ title }: { title: string }) {
  return (
    <div className="max-w-[1920px] ">
      <p className=" mb-4">{title}</p>
      <div className="flex justify-evenly">
        {mdPickData.map((item: itemType) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TopList;

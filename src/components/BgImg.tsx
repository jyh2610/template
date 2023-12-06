import { mdPickData } from "@/contants/mdPick";

import ListItem from "./ItemList/ListItem";

import type { itemType } from "@/contants/mdPick";

function BgImg({ url }: { url: string }) {
  return (
    <>
      <div className="h-[700px] min-h-600 bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${url})` }}></div>

      <div className="bg-white mt-11 mb-11 px-10 max-w-[1710px] mx-auto">
        <p className="pb-4 font-bold">작은공간에 큰 행복을, 주방/생활가전</p>
        <div className="flex  w-full justify-between items-center">
          {mdPickData.map((item: itemType) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BgImg;

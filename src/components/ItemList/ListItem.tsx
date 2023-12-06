/* eslint-disable @next/next/no-img-element */
import type { itemType } from "@/contants/mdPick";

import "./styles.css";

function ListItem({ item }: { item: itemType }) {
  return (
    <div className="w-[calc(100%/6_-_2rem)] ">
      <div className="w-full">
        <div className="w-full h-96 container relative">
          <img className="w-full h-full object-cover  image" src={item.src} alt="list-img" />
          <div className="middle absolute inset-0 flex justify-center items-center transition-opacity opacity-0">
            <div className="text text-white text-center text-lg p-4">
              주문폭주로 배송지연
              <button className="bg-white rounded-full">자세히 보기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-1">
        <p className="font-normal text-[#b39579] text-[11px] tracking-[-0.35px] leading-[20px] whitespace-normal">{item.title}</p>
        <p className="font-medium text-[#333333] text-[13.5px] tracking-[-0.35px] leading-loose whitespace-normal">{item.contents}</p>
        <div className="w-[71px] h-[24px] bg-[#b39579]">
          <p className="font-normal text-white text-[10px] flex justify-center leading-[24px] tracking-[-0.35px] whitespace-normal">통합이벤트</p>
        </div>
        <p className="font-light text-[#999999] text-[12px] tracking-[-0.35px] leading-normal whitespace-normal">{item.comment}</p>
        <p className="font-medium text-black text-[14px] tracking-[-0.35px] leading-loose whitespace-normal">
          <span className="line-through">{item.price}</span> <span>{item.discount}</span>
        </p>
      </div>
    </div>
  );
}

export default ListItem;

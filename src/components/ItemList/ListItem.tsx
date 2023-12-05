import type { itemType } from "@/contants/mdPick";

function ListItem({ item }: { item: itemType }) {
  return (
    <div className="w-64">
      <div className="w-full h-96">
        <img className="w-full h-full" src="https://dld3l66jf7t9m.cloudfront.net/images/ani_slide_img_01.png" alt="list-img" />
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

import { Dropdown } from "antd";

import HamburgerDrop from "./HamburgerDrop";

import type { MenuProps } from "antd";

/* eslint-disable @next/next/no-img-element */
function NavBody() {
  const navItems = [
    { label: "포토 리뷰", left: "693px" },
    { label: "기획전", left: "760px" },
    { label: "이벤트", left: "817px" },
    { label: "쿠첸", left: "867px", image: "url(...)" },
    { label: "멤버십 혜택", left: "957px" },
    { label: "신제품", left: "1031px" },
    { label: "밥솥", left: "1090px" },
    { label: "전기레인지", left: "1145px" },
    { label: "주방/생활가전", left: "1214px" },
    { label: "소모품/기타", left: "1294px" },
  ];
  const items: MenuProps["items"] = [
    {
      label: <div>123123</div>,
      key: "0",
    },
    {
      label: <div>123123</div>,
      key: "1",
    },
    {
      label: <div>123123</div>,
      key: "2",
    },
  ];
  const renderNavItems = () => {
    return navItems.map((item, idx) => (
      <Dropdown key={idx} menu={{ items }} placement="bottom" trigger={["click"]}>
        <div
          className={` h-[16px] [font-family:'Inter',Helvetica] font-bold text-black text-lg text-center tracking-[0] leading-[16px] whitespace-nowrap`}
          style={{ background: item.image }}
        >
          {item.label}
        </div>
      </Dropdown>
    ));
  };

  return (
    <div className="flex justify-around h-20 bg-white">
      <div className="flex items-center">
        <HamburgerDrop />
        <img
          src="https://c.animaapp.com/i7HG4gw9/img/heading-1---link---logo-png@2x.png"
          alt="logo"
          className="ml-2 pb-2 m-auto w-[180px] h-[40px] object-contain"
        />
      </div>
      <div className="flex items-center gap-8">{renderNavItems()}</div>
      <div className="flex">
        <img className=" w-[40px]" alt="Nav list item link" src="https://c.animaapp.com/gilqNkUp/img/nav---list---item---link-2.svg" />
        <img className=" w-[40px]" alt="Nav list item link" src="https://c.animaapp.com/gilqNkUp/img/nav---list---item---link-1.svg" />
        <img className=" w-[40px]" alt="Nav list item link" src="https://c.animaapp.com/gilqNkUp/img/nav---list---item---link.svg" />
      </div>
    </div>
  );
}

export default NavBody;

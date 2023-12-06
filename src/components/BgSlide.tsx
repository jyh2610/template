import { BgImgData } from "@/contants/BgData";

import BgImg from "./BgImg";

function BgSlide() {
  return (
    <section>
      {BgImgData.map((item, idx) => {
        return <BgImg key={idx} url={item} />;
      })}
    </section>
  );
}

export default BgSlide;

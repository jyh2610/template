import Banner from "@/components/Banner";
import BgSlide from "@/components/BgSlide";
import Event from "@/components/events/Event";
import BasicCarousel from "@/components/ItemList/BasicCarousel";
import TopList from "@/components/ItemList/TopList";
import MainSlide from "@/components/mainImg/MainSlide";
import MonthlyPromo from "@/components/promotion/MonthlyPromo";
import TagFrame from "@/components/tag/TagFrame";

export default function Home() {
  return (
    <div className="space-y-28 mx-auto">
      <MainSlide />
      <section className="space-y-28 w-full mx-auto">
        <TopList title="MD’S PICK" />
        <TopList title="지금, 가장 HOT한 제품" />
        <div className="flex justify-center max-w-[1710px] w-10/12 mx-auto gap-8">
          <TagFrame />
          <MonthlyPromo />
        </div>
      </section>
      <Banner />
      <BasicCarousel />
      <Banner />
      <BgSlide />
      <Event />
    </div>
  );
}
